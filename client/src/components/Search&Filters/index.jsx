import React, { useState } from "react";
import { useSelector } from "react-redux";
import Filters from "./Filters";
import Search from "./Search";

function SearchAndFilters({ setCurrentPage }) {
  
  const [activity, setActivity] = useState("");
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
        setCity={setCity}
      />
      </div>
       <div className="row">
      <Filters
        setCurrentPage={setCurrentPage}
        // price={priceOrder}
        // stock={stockOrder}
        activity={activity}
        startDate={startDate}
        // setPrice={setPriceOrder}
        // setStock={setStockOrder}
        setActivity={setActivity}
        activities={activities}
        city={city}
      />
      </div>
    </div>
  );
}

export default SearchAndFilters;
