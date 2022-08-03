const { Router } = require("express");
const { getReviews, getReviewById, postReview, deleteReview } = require('../controllers/reviewController')

const router = Router();

router.get("/", getReviews);
router.get("/:id", getReviewById);
router.post("/", postReview);
router.delete("/:id", deleteReview);
router.put("/:id", updateReview);

module.exports = router;
