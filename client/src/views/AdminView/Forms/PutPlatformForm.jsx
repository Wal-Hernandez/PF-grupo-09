import React from "react";
import { useDispatch } from "react-redux";

import { putPlatform } from "../../../redux/actions/putPlatform";
export const PutPlatformForm = ({pack}) => {
  
  const dispatch = useDispatch();
  const [platform, setPlatform] = React.useState({
    terminal: pack.terminal,
    address: pack.address,
    location: pack.location,
  });
  console.log(platform);
  function TransformData(x) {
    if (isNaN(x[0])) return x;
    return x.split(",");
  }

  function handleChange(event) {
    setPlatform({
      ...platform,
      [event.target.name]: TransformData(event.target.value),
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); // para que era esto?
    dispatch(putPlatform(pack.id, platform));
  }

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit}>
        <div className="div-form">
          <label className="label-form"> Terminal</label>
          <input
            type="text"
            name="terminal"
            value={platform["terminal"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Address</label>
          <input
            type="text"
            name="address"
            value={platform["address"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Location</label>
          <input
            type="text"
            name="location"
            value={platform["location"]}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="button-form">
          {" "}
          Put Platform
        </button>
    
      </form>
    </div>
  );
};
