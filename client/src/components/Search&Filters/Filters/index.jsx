import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByActivity } from "../../../redux/actions/filterByActivity";
import { sortByPrice } from "../../../redux/actions/sortByPrice";
import { sortByStock } from "../../../redux/actions/sortByStock";

function Filters(props) {
  const [selectOrder, setSelectOrder] = useState("precio");
  const dispatch = useDispatch();

  console.log(props.city);

  function handleActivities(e) {
    dispatch(filterByActivity(e.target.value, props.price, props.stock));
    props.setActivity(e.target.value);
    props.setCurrentPage(1);
  }
  function handleSortByPrice(e) {
    let startShortDate = "";
    if (props.startDate !== "") {
      return (startShortDate = props.startDate?.toISOString());
    }
    dispatch(sortByPrice(e.target.value, props.city, startShortDate));
    props.setPrice(e.target.value);
    props.setCurrentPage(1);
  }
  function handleSortByStock(e) {
    let startShortDate = "";
    if (props.startDate !== "") {
      return (startShortDate = props.startDate?.toISOString());
    }

    dispatch(sortByStock(e.target.value, props.city, startShortDate));
    props.setStock(e.target.value);
    props.setCurrentPage(1);
  }

  return (
    <div className="select-container d-flex row-cols-3">
      <div className="col-3 justify-content-center">
        <form>
          Ordenar por:
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="selectOrder"
                value={"precio"}
                onChange={(e) => {
                  setSelectOrder(e.target.value);
                }}
                className="form-check-input"
              />
              Precio
            </label>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="selectOrder"
                value={"stock"}
                onChange={(e) => {
                  setSelectOrder(e.target.value);
                }}
                className="form-check-input"
              />
              Stock
            </label>
          </div>
        </form>
      </div>
      <div className="col-4 align-self-center">
        {selectOrder === "precio" ? (
          <select
            className="form-select"
            defaultValue=""
            onChange={handleSortByPrice}
            label={"Ordenar por precio"}
          >
            <option value="">Ordenar por precio</option>
            <option label={"Menor precio"} value="asc"></option>
            <option label={"Mayor precio"} value="desc"></option>
          </select>
        ) : selectOrder === "stock" ? (
          <select
            className="form-select"
            defaultValue=""
            onChange={handleSortByStock}
            label={"Ordenar por stock"}
          >
            <option value="">Ordenar por stock</option>
            <option label={"Menor stock"} value="asc"></option>
            <option label={"Mayor stock"} value="desc"></option>
          </select>
        ) : null}
      </div>
      <div className="col-4 align-self-center">
        <select
          className="form-select"
          defaultValue=""
          onChange={handleActivities}
        >
          <option value="" disabled>
            Filtrar por actividades
          </option>
          <option value="">Mostrar todo</option>
          {props.activities?.map((e, index) => (
            <option key={index}>{e.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
