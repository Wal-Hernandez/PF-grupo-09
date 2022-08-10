import React from "react";
import ReactStars from "react-rating-stars-component";

function ShowReviews({ data, titulo }) {
  const starsValue = data?.map((e) => e.score);

  const sumScore = starsValue.reduce((a, b) => a + b);
  const mediaScore = sumScore / starsValue.length;

  return (
    <div>
      <h5>
          {titulo}:
          <p>
            {`${mediaScore} de 5 estrellas`}
            <ReactStars size={40} edit={false} value={mediaScore} />
          </p>
      </h5>

      {data.map((e) => (
        <div>
          <ReactStars edit={false} value={e.score} />
          <h6>{e.title}</h6>
          <span>{e.comment}</span>
        </div>
      ))}
    </div>
  );
}

export default ShowReviews;
