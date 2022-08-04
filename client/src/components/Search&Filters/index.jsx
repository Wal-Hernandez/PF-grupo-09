import React, { useState } from "react";
import Filters from "./Filters";
import Search from "./Search";

function SearchAndFilters({ setCurrentPage }) {
  const [priceOrder, setPriceOrder] = useState("");
  const [stockOrder, setStockOrder] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="container w-75 mt-5">
      <div className="row mt-5">
      <Search
        setCurrentPage={setCurrentPage}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      </div>
       <div className="row">
      <Filters
        setCurrentPage={setCurrentPage}
        price={priceOrder}
        stock={stockOrder}
        city={city}
        startDate={startDate}
        endDate={endDate}
        setPrice={setPriceOrder}
        setStock={setStockOrder}
        setCity={setCity}
      />
      </div>
    </div>
  );
}

export default SearchAndFilters;
