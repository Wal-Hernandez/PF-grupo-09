import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useForm } from "react-hook-form";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";

function ReviewsForm({hotel}) {
  const auth = getAuth();
  const user = auth.currentUser;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {cart} = useSelector(state => state.rootReducer);

  console.log(cart)
  const [values, setValues] = useState({
    userId: cart.userId,
    hotelId: hotel.id,
    title: "",
    comment: "",
    score: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value, 
    });
  };

  const handleRating = (newRating) =>{
    setValues({
        ...values,
        score: newRating
    })
  }

  const handleReview = (e)=> {
    e.preventDefault()

  }

  console.log(user)
  if (user) {
    const title = register("title", {
      required: { value: true, message: "REQUERIDO" },
    });

    const comment = register("comment", {
      required: { value: true, message: "REQUERIDO" },
    });

    return (
        <div>
          <div>
            <form className="review-form" onSubmit={handleSubmit(handleReview)}>
              <label>
                {" "}
                Título:
                <input name='title' type="text" onChange={(e)=>{
                    title.onChange(e)
                    handleChange(e)
                }}/>
                {errors?.title ? <span>{errors?.title?.message}</span> : null}
              </label>
              <label>
                {" "}
                Comentario:
                <textarea name='comment' onChange={(e)=>{
                    comment.onChange(e)
                    handleChange(e)
                }}/>
                {errors?.comment && <span>{errors?.comment?.message}</span>}
              </label>
              <label>
                {" "}
                Calificación:
                <ReactStars size={30} isHalf={true} classNames="reactStars" onChange={handleRating}  emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        filledIcon={<i className="fa fa-star"></i>}/>
              </label>
              <button>Dejar valoración</button>
            </form>
          </div>
        </div>
      );
}else{
    return(
        <h5>Necesitas esta logueado para dejar un comentario</h5>
    )
}

  
}

export default ReviewsForm;
