import React, { useState } from "react";
import ShowReviews from "./ShowReviews";
import ReactStars from 'react-rating-stars-component'
//import './reviews.css'

function Reviews({hotel}) {

    const [showReviews, setshowReviews] = useState(false);
    const [values, setValues] = useState({
        userId: '',
        hotelId: hotel.id,
        title: '',
        comment: '',
        score: ''
    });

    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

  return (
    <div className="review-container">
      <div>
        <button onClick={() => setshowReviews(!showReviews)}>
          Mostrar valoraciones del hotel
        </button>
        {showReviews && <ShowReviews hotel={hotel} />}
      </div>
      <div>
        <form className="review-form">
          <label>
            {" "}
            Título:
              <input type="text" />
          </label>
          <label>
            {" "}
            Comentario:
              <textarea />
          </label>
          <label>
            {" "}
            Calificación:
            <ReactStars size={30} classNames="reactStars" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Reviews;
