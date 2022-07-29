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
    <div>
      <Search
        setCurrentPage={setCurrentPage}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
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
  );
}

export default SearchAndFilters;
