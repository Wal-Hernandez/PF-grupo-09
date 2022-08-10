import React from "react";
import ReactStars from "react-rating-stars-component";

function ShowReviews({ data, titulo }) {
  const starsValue = data?.map((e) => e.score);

  const sumScore = starsValue.reduce((a, b) => a + b);
  const mediaScore = sumScore / starsValue.length;

  return (
    <div className="comment">
      <h5>
          {titulo}:
          <p>
            <ReactStars size={20} edit={false} value={mediaScore} />
          </p>
      </h5>

      {data.map((e) => (
        <div>
          <h6>{e.title}</h6>
          <span>{e.comment}</span>
        </div>
      ))}
    </div>
  );
}

export default ShowReviews;
