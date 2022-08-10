import React, { useEffect, useState } from "react";
import ShowReviews from "./ShowReviews";

import ReactStars from 'react-rating-stars-component'
import './review.css'
import ReviewsForm from './ReviewsForm'
import { useSelector } from "react-redux";

function Reviews({hotel, activity, business, userlog, selected}) {

  const { cart } = useSelector((state) => state.rootReducer);
  
  console.log(cart[0]?.user)
  const [hotelValues, setHotelValues] = useState({
    userId: cart[0]?.user.id,
    hotelId: hotel,
    title: "",
    comment: "",
    score: 0,
  });
  const [activityValues, setActivityValues] = useState({
    userId: cart[0]?.user.id,
    activityId: activity,
    title: "",
    comment: "",
    score: 0,
  });
  console.log(activityValues.activityId)
    const [businessValues, setBusinessValues] = useState({
      userId: cart[0]?.user.id,
      businessId: business,
      title: "",
      comment: "",
      score: 0,
    });
    console.log(activityValues)
    useEffect(() => {
      setHotelValues({...hotelValues, hotelId: hotel})
      setBusinessValues({...businessValues, businessId: business})
      setActivityValues({...activityValues, activityId: activity})
console.log(hotel,business,activity)
    }, [hotel, activity, business]);

  if (userlog?.rol === "banned") {
    return <>BANEADO</>;
  }
  
  return (

    <>
     {/* <div className="div-form">
        <select name="cityId" defaultValue="" onChange={(e)=>setSelected(e.target.value)}>
          <option key="keycities" value="activityreviews"> Activities </option>
          <option value="businessreviews">Business</option>
          <option value="hotelreviews">Hotels</option>
        </select>
      </div> */}
      {
        selected === 'activityreviews' ? <ReviewsForm values={activityValues} setValues={setActivityValues} selected={selected} userlog={userlog}/>
        : selected === 'businessreviews' ? <ReviewsForm values={businessValues} setValues={setBusinessValues} selected={selected} userlog={userlog}/>
        : selected === 'hotelreviews' ? <ReviewsForm values={hotelValues} setValues={setHotelValues} selected={selected} userlog={userlog}/>
        : null
      }
    </>
  );
}

export default Reviews;