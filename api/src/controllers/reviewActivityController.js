const { ReviewActivity, User, Activity } = require("../db");

const getReviews = async (req, res) => {
  try {
    const reviews = await ReviewActivity.findAll({
      include: [
        {
          model: User,
        },
        {
          model: Activity,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(reviews);
  } catch (error) {
    res.status(404).json({
      msg: "There are no reviews to show",
      error: error,
    });
  }
};

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;

    const review = await ReviewActivity.findByPk(id, {
      include: [
        {
          model: User,
        },
        {
          model: Activity,
          attributes: ["name"],
        },
      ],
    });
    res.status(200).json(review);
  } catch (error) {
    res.status(404).json({
      msg: `Review #${id} not found`,
      error: error,
    });
  }
};

const postReview = async (req, res) => {
  try {
    const { userId, activityId, score, title, comment } = req.body;

    if (!userId || !activityId || !score || !title || !comment) res.status(400).json({ msg: "You need to fill all the fields to leave a review" });
    if (typeof title !== "string" || typeof comment !== "string") res.status(400).json({ msg: "Input must be letters or letters and numbers" });
    if (score < 1 || score > 5) res.status(400).json({ msg: "Score must be between 1 and 5" });

    const newReview = await ReviewActivity.findOrCreate({
      where: {
        userId: userId,
        activityId: activityId,
        score: score,
        title: title,
        comment: comment,
      },
    });
    return res.status(201).send("Review posted successfully");
  } catch (error) {
    res.status(400).json({
      msg: "Couldn't post review",
      error: error,
    });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, activityId, score, title, comment } = req.body;

    if (!userId || !activityId || !score || !title || !comment) res.status(400).json({ msg: "All fields are required" });
    if (typeof title !== "string" || typeof comment !== "string") res.status(400).json({ msg: "Input must be letters or letters and numbers" });
    if (score < 1 || score > 5) res.status(400).json({ msg: "Score must be between 1 and 5" });

    const updated = await ReviewActivity.update(
      {
        userId,
        activityId,
        score,
        title,
        comment,
      },
      {
        where: { id: id },
      }
    );

    if (updated[0]) {
      return res.status(201).json({
        msg: "The review has been updated successfully",
        valor: true,
      });
    } else {
      return res.status(400).json({
        msg: "The review cannot be updated because the id does not exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "Error updateReview(reviewController.js)",
      error: error,
    });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteReview = await ReviewActivity.destroy({
      where: { id: id },
    });

    if (deleteReview) {
      return res.status(200).json({
        msg: "The review has been removed successfully",
        valor: true,
      });
    } else {
      return res.status(400).json({
        msg: "The review cannot be removed because the id does not exist",
      });
    }
  } catch (error) {
    return res.status(400).json({
      msg: "The review cannot be removed",
      error: error.message,
    });
  }
};

module.exports = {
  getReviews,
  getReviewById,
  postReview,
  updateReview,
  deleteReview,
};
