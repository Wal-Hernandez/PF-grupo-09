import React from "react";
import ReactStars from "react-rating-stars-component";

function ShowReviews({ data }) {
  const starsValue = data?.reviews.map((e) => e.score);

  const sumScore = starsValue.reduce((a, b) => a + b);
  const mediaScore = sumScore / starsValue.length;

  return (
    <div>
      <h5>
          Calificaciones de usuarios:
          <p>
            {`${mediaScore} de 5 estrellas`}
            <ReactStars size={40} edit={false} value={mediaScore} />
          </p>
      </h5>

      {data.reviews.map((e) => (
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
