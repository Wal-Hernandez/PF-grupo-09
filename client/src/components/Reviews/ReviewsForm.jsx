import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { postReview } from "../../redux/actions/postReview";
import { getHotels } from "../../redux/actions/getHotels";
import swal from "sweetalert";

function ReviewsForm({ values, setValues, selected }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleRating = (newRating) => {
    newRating > 1 ?
    setValues({
      ...values,
      score: newRating,
    }) : 
    setValues({
      ...values,
      score: 1,
    })
  };

  const handleReview = (e) => {
    e.preventDefault();
    dispatch(postReview(selected, values));
    setValues({
      ...values,
      title: "",
      comment: "",
      score: 0
    });
    swal({
      title: "Valoracion aceptada",
      icon: "success"
    })
    dispatch(getHotels());
  };

  if (user) {
    return (
     
          <form className="formUsuario" onSubmit={handleReview}>
                  <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Título</label>
                  <input class="form-control" id="exampleFormControlInput1"  
                    value={values.title}
                    name="title"
                    type="text"
                    onChange={(e) => {
                    handleChange(e);
                    }}>      
                  </input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"> Comentario</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={values.comment}
                              name="comment"
                              onChange={(e) => {
                                handleChange(e);
                              }}></textarea>
                  </div>
                <div class="mb-3">
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
                </div>
           
           
        
       
            <button className="btn-review-form review-items">Dejar valoración</button>
          </form>
      
    );
  } else {
    return <h5>Necesitas esta logueado para dejar un comentario</h5>;
  }
}

export default ReviewsForm;