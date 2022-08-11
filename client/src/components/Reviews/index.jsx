import React, { useEffect, useState } from "react";
import ShowReviews from "./ShowReviews";

import ReactStars from 'react-rating-stars-component'
import './review.css'
import ReviewsForm from './ReviewsForm'
import { useSelector } from "react-redux";

function Reviews({hotel, activity, business, userlog, selected, id}) {

  const { cart } = useSelector((state) => state.rootReducer);
  
  const [hotelValues, setHotelValues] = useState({
    userId: id,
    hotelId: hotel,
    title: "",
    comment: "",
    score: 0,
  });
  console.log(id)
  const [activityValues, setActivityValues] = useState({
    userId: id,
    activityId: activity,
    title: "",
    comment: "",
    score: 0,
  });
  console.log(activityValues.activityId)
    const [businessValues, setBusinessValues] = useState({
      userId: id,
      businessId: business,
      title: "",
      comment: "",
      score: 0,
    });
 
    useEffect(() => {
      setHotelValues({...hotelValues,userId: id, hotelId: hotel})
      setBusinessValues({...businessValues,userId: id, businessId: business})
      setActivityValues({...activityValues,userId: id, activityId: activity})

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
        selected === 'activityreviews' ? <ReviewsForm values={activityValues} setValues={setActivityValues} selected={selected}/>
        : selected === 'businessreviews' ? <ReviewsForm values={businessValues} setValues={setBusinessValues} selected={selected} />
        : selected === 'hotelreviews' ? <ReviewsForm values={hotelValues} setValues={setHotelValues} selected={selected} />
        : null
      }
    </>
  );
}

export default Reviews;
