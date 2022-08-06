import React from "react";
import ReactStars from "react-rating-stars-component";
function ShowReviews({ hotel }) {
  const starsValue = hotel?.reviews.map((e) => e.score);
  const sumScore = starsValue.reduce((a, b) => a + b);
  const mediaScore = sumScore / starsValue.length;

  return (
    <div>
      <h5>
        Calificación del hotel:{" "}
        <ReactStars size={40} edit={false} value={mediaScore} />{" "}
      </h5>
      {hotel.reviews.map((e) => (
        <div>
          <ReactStars edit={false} value={e.score} />
          <h5>{e.title}</h5>
          <span>{e.comment}</span>
        </div>
      ))}
    </div>
  );
}

export default ShowReviews;
