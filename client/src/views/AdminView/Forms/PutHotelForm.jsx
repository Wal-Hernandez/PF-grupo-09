import React from "react";
import { useDispatch } from "react-redux";

import { putHotel } from "../../../redux/actions/putHotel";
export const PutHotelForm = ({pack}) => {
  const dispatch = useDispatch();
  const [hotel, setHotel] = React.useState({
    name: pack.name, 
    location: pack.location, 
    stars: pack.stars, 
    phone: pack.phone, 
    price: pack.price, 
    pool: pack.pool, 
    wifi: pack.wifi, 
    gym: pack.gym, 
    urlImage: pack.urlImage, 
    cityId: pack.cityId, 
    score: pack.score, 
    comments: pack.comments
  });
  console.log(pack.id);
  function TransformData(x) {
    if (isNaN(x[0])) return x;
    return x.split(",");
  }

  function handleChange(event) {
    if (event.target.name === "location") {
      setHotel({
        ...hotel,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }
    if (event.target.name === "urlImage" || event.target.name === "comments" ) {
      setHotel({ ...hotel, [event.target.name]: [event.target.value] });
      return;
    }
    if (
      event.target.name === "gym" ||
      event.target.name === "pool" ||
      event.target.name === "wifi"
    ) {
      if (event.target.value === "true") {
        setHotel({ ...hotel, [event.target.name]: true });
      } else {
        setHotel({ ...hotel, [event.target.name]: false });
      }
      return;
    }
    if(event.target.name === "score"){
      setHotel({
        ...hotel,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }

    setHotel({ ...hotel, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // para que era esto?
  dispatch(putHotel(pack.id, hotel)); 
  }

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit}>
        <div className="div-form">
          <label className="label-form"> Name</label>
          <input
            type="text"
            name="name"
            value={hotel["name"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Location</label>
          <input
            type="text"
            name="location"
            value={hotel["location"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Stars</label>
          <input
            type="number"
            name="stars"
            value={hotel["stars"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Phone</label>
          <input
            type="text"
            name="phone"
            value={hotel["phone"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Price</label>
          <input
            type="text"
            name="price"
            value={hotel["price"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> UrlImage:</label>
          <input
            type="text"
            name="urlImage"
            value={hotel["urlImage"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Gimnasio </label>
          <select name="gym" onChange={handleChange} defaultValue="">
            <option value="">-</option>
            <option value="true">
              Si
            </option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="div-form">
          <label className="label-form"> Pool </label>
          <select name="pool" onChange={handleChange} defaultValue="">
            <option value="">-</option>
            <option value="true">
              Si
            </option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="div-form">
          <label className="label-form"> Wifi </label>
          <select name="wifi" onChange={handleChange} defaultValue="">
            <option value="">-</option>
            <option value="true">
              Si
            </option>
            <option value="false">No</option>
          </select>
        </div>

    

        <div className="div-form">
          <label className="label-form"> City Id</label>
          <input
            type="number"
            name="cityId"
            value={hotel["cityId"]}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="button-form">
          {" "}
          Put Hotel
        </button>
   
      </form>
    </div>
  );
};
