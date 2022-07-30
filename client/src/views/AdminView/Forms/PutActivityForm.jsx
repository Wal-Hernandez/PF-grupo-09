import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { putActivity } from "../../../redux/actions/putActivity";
export const PutActivityForm = ({id}) => {
  
  const dispatch = useDispatch();
  const [activity, setActivity] = React.useState({
    name: "",
    description: "",
    price: "",
    score: 0,
    comments: "",
    cityId: 0,
  });
  function handleChange(event) {
    if (event.target.name === "comments" || event.target.name === "score") {
      setActivity({ ...activity, [event.target.name]: [event.target.value] });
      return;
    }
    setActivity({ ...activity, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // para que era esto?
    dispatch(putActivity(id, activity));
  }

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit}>
        <div className="div-form">
          <label className="label-form"> Name:</label>
          <input
            type="text"
            name="name"
            value={activity["name"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> image</label>
          <input
            type="text"
            name="image"
            value={activity["image"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> price:</label>
          <input
            type="number"
            name="price"
            value={activity["price"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> score:</label>
          <input
            type="number"
            name="score"
            value={activity["score"]}
            onChange={handleChange}
          />
        </div>
        
        <div className="div-form">
          <label className="label-form"> comments:</label>
          <input
            type="text"
            name="comments"
            value={activity["comments"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> cityId:</label>
          <input
            type="number"
            name="cityId"
            value={activity["cityId"]}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="button-form">
          {" "}
          Put Activity
        </button>
        <Link to="/admin"> Volver</Link>
      </form>
    </div>
  );
};
