import React, { useState } from "react";
import ShowReviews from "./ShowReviews";
import ReactStars from "react-rating-stars-component";
import "./review.css";
import ReviewsForm from "./ReviewsForm";
function Reviews({ hotel, userlog }) {
  const [showReviews, setshowReviews] = useState(false);

  if (userlog.rol === "banned") {
    return <>BANEADO</>;
  }

  return (
    <div className="review-container">
      {hotel?.reviews.length ? (
        <div>
          <button onClick={() => setshowReviews(!showReviews)}>
            Mostrar valoraciones del hotel
          </button>
          {showReviews && <ShowReviews data={hotel} />}
        </div>
      ) : null}
      <ReviewsForm hotel={hotel} />
    </div>
  );
}

export default Reviews;
