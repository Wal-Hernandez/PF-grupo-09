import React from "react";
import { useDispatch } from "react-redux";

import { putPackage } from "../../../redux/actions/putPackage";
export const PutPackageForm = ({pack}) => {

  const dispatch = useDispatch();
  const [packages, setPackages] = React.useState({
    start_date: pack.start_date,
    end_date: pack.end_date,
    name: pack.name,
    price: pack.price,
    discount: pack.discount,
    stock: pack.stock,
    plattformId: pack.plattformId,
    businessId: pack.businessId,
    cityId:pack.cityId,
    hotelId: pack.hotelId,
    activity: []
  });
  console.log(packages);
  function TransformData(x) {
    return x.split(",");
  }

  function handleChange(event) {
    if (event.target.name === "activity") {
      setPackages({
        ...packages,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }
    setPackages({ ...packages, [event.target.name]: event.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); // para que era esto?
    dispatch(putPackage(pack.id, packages));
  }

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit}>
        <div className="div-form">
          <label className="label-form"> Name</label>
          <input
            type="text"
            name="name"
            value={packages["name"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Start_date</label>
          <input
            type="text"
            name="start_date"
            value={packages["start_date"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> End_date</label>
          <input
            type="text"
            name="end_date"
            value={packages["end_date"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Price</label>
          <input
            type="number"
            name="price"
            value={packages["price"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Discount</label>
          <input
            type="number"
            name="discount"
            value={packages["discount"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Stock</label>
          <input
            type="number"
            name="stock"
            value={packages["stock"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> PlattformId</label>
          <input
            type="number"
            name="plattformId"
            value={packages["plattformId"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Business Id</label>
          <input
            type="number"
            name="businessId"
            value={packages["businessId"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> City Id</label>
          <input
            type="number"
            name="cityId"
            value={packages["cityId"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Hotel Id</label>
          <input
            type="number"
            name="hotelId"
            value={packages["hotelId"]}
            onChange={handleChange}
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Activity</label>
          <input
            type="text"
            name="activity"
            value={packages["activity"]}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="button-form">
          {" "}
          Put Package
        </button>

      </form>
    </div>
  );
};
