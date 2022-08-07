import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../redux/actions/postReview";
import { getHotels } from "../../redux/actions/getHotels";
import swal from "sweetalert";

function ReviewsForm({ hotel }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const { cart } = useSelector((state) => state.rootReducer);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    userId: cart[0]?.userId,
    hotelId: hotel.id,
    title: "",
    comment: "",
    score: 0,
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = (newRating) => {
    setValues({
      ...values,
      score: newRating,
    });
  };

  const handleReview = (e) => {
    e.preventDefault();
    dispatch(postReview(values));
    setValues({
      ...values,
      title: "",
      comment: "",
      score: 0,
    });
    swal({
      title: "Valoracion aceptada",
      icon: "success"
    })
    dispatch(getHotels());
  };

  if (user) {
    return (
      <div>
        <div>
          <form className="review-form" onSubmit={handleReview}>
            <label>
              {" "}
              Título:
              <input
                value={values.title}
                name="title"
                type="text"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </label>
            <label>
              {" "}
              Comentario:
              <textarea
                value={values.comment}
                name="comment"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              Calificación:
              <ReactStars
                value={values.score}
                size={30}
                isHalf={true}
                classNames="reactStars"
                onChange={handleRating}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                filledIcon={<i className="fa fa-star"></i>}
              />
            </label>
            <button>Dejar valoración</button>
          </form>
        </div>
      </div>
    );
  } else {
    return <h5>Necesitas esta logueado para dejar un comentario</h5>;
  }
}

export default ReviewsForm;
