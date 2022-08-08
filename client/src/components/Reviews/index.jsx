import React, { useState } from "react";
import ShowReviews from "./ShowReviews";
import ReactStars from 'react-rating-stars-component'
import './review.css'
import ReviewsForm from './ReviewsForm'
function Reviews({hotel}) {

    const [showReviews, setshowReviews] = useState(false);

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
      <ReviewsForm hotel={hotel}/>
    </div>
  );
}

export default Reviews;
