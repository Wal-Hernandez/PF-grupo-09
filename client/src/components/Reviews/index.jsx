import React, { useState } from "react";
import ShowReviews from "./ShowReviews";

import ReactStars from 'react-rating-stars-component'
import './review.css'
import ReviewsForm from './ReviewsForm'
import { useSelector } from "react-redux";
function Reviews({hotel, activity, business, userlog}) {

    const [showReviews, setshowReviews] = useState(false);
    const { cart } = useSelector((state) => state.rootReducer);
    const [selected, setSelected] = useState('');
    console.log(cart[0]?.user)
    const [hotelValues, setHotelValues] = useState({
      userId: cart[0]?.user.id,
      hotelId: hotel.id,
      title: "",
      comment: "",
      score: 0,
    });
    const [activityValues, setActivityValues] = useState({
      userId: cart[0]?.user.id,
      activityId: activity.id,
      title: "",
      comment: "",
      score: 0,
    });
    const [businessValues, setBusinessValues] = useState({
      userId: cart[0]?.user.id,
      businessId: business.id,
      title: "",
      comment: "",
      score: 0,
    });

  if (userlog?.rol === "banned") {
    return <>BANEADO</>;
  }
  
  return (

    <>
     <div className="div-form">
          <select name="cityId" defaultValue="" onChange={(e)=>setSelected(e.target.value)}>
            <option key="keycities" value="activityreviews"> Activities </option>
           <option value="businessreviews">Business</option>
           <option value="hotelreviews">Hotels</option>
          </select>
        </div>
        {
          selected === 'activityreviews' ? <ReviewsForm data={activity} values={activityValues} setValues={setActivityValues} selected={selected}/>
          : selected === 'businessreviews' ? <ReviewsForm data={business} values={businessValues} setValues={setBusinessValues} selected={selected}/>
          : selected === 'hotelreviews' ? <ReviewsForm data={hotel} values={hotelValues} setValues={setHotelValues} selected={selected}/>
          : null
        }
    {/* <div className="review-container">
      {hotel?.reviews?.length? (

        <div>
          <button onClick={() => setshowReviews(!showReviews)}>
            Mostrar valoraciones del hotel
          </button>
          {showReviews && <ShowReviews show={hotel} />}
        </div>
      ) : null}
    </div>
    <div className="review-container">
      {activity?.reviews?.length? (
        <div>
          <button onClick={() => setshowReviews(!showReviews)}>
            Mostrar valoraciones del hotel
          </button>
          {showReviews && <ShowReviews hotel={hotel} />}
        </div>
      ) : null}
      <ReviewsForm data={hotel} values={hotelValues} setValues={setHotelValues}/>
    </div>
     */}
    </>
  );
}

export default Reviews;
