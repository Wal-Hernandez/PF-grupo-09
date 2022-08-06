import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filters from "./Filters";
import Search from "./Search";

function SearchAndFilters({ setCurrentPage }) {
  const [priceOrder, setPriceOrder] = useState("");
  const [stockOrder, setStockOrder] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");

  const {cities, activities} = useSelector(state => state.rootReducer);

  return (
    <div className="container w-75 mt-5">
      <div className="row mt-5">
      <Search
        setCurrentPage={setCurrentPage}
        startDate={startDate}
        setStartDate={setStartDate}
        cities={cities}
        activities={activities}
      />
      </div>
       <div className="row">
      <Filters
        setCurrentPage={setCurrentPage}
        price={priceOrder}
        stock={stockOrder}
        city={city}
        startDate={startDate}
        setPrice={setPriceOrder}
        setStock={setStockOrder}
        setCity={setCity}
        cities={cities}
      />
      </div>
    </div>
  );
}

export default SearchAndFilters;
