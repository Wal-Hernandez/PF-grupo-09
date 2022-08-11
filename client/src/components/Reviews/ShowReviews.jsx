import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";

function ShowReviews({ data, titulo }) {

  const starsValue = data?.map((e) => e.score);

  const sumScore = starsValue.reduce((a, b) => a + b);
  const mediaScore = sumScore / starsValue.length;


  return (
    <div className="comment">
      <h5>
          {titulo}:
      </h5>
            <ReactStars size={20} edit={false} value={mediaScore} />
       
      {data.map((e) => (
        <div>
          <h6>{e.title}</h6>
          <p class="card-text"><small class="text-muted">{e.user.mail}</small></p>
          <span>{e.comment}</span>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ShowReviews;