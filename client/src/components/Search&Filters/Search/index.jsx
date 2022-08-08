import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { filterByDate } from "../../../redux/actions/filterByDate&Dest";
import { getPackages } from "../../../redux/actions/getPackages";
import AutocompleteSearch from "./AutocompleteSearch";

function Search({ startDate, setStartDate, cities, setCity, price, stock, setPrice, setStock }) {
  const dispatch = useDispatch();
  const [destinationCity, setDestinationCity] = useState('');
  const [values, setValues] = useState({
    destination: '',
    start_date: startDate,
    passengers: 0,
  });

  const [matchingResults, setMatchingResults] = useState({
    destination: "",
    date: "",
  });

  const handlePassenger = (e) => {
    setValues({
      ...values,
      passengers: e.target.value,
    });
  };

  const handleDates = () => {
    setValues({
      ...values,
      start_date: startDate ? startDate?.toISOString() : "",
    });
  };

  const handleSearch = (e) => {
    const { destination, start_date } = values;
    e.preventDefault();
    dispatch(filterByDate(destination, start_date, price, stock));
    setCity(destinationCity)
    setMatchingResults({
      destination: destination.toUpperCase(),
      date: startDate && new Date(start_date).toDateString(),
    });
  };
  const handleClear = (e) => {
    e.preventDefault();
    setStartDate("");
    setDestinationCity('')
    setCity('')
    setValues({
      ...values,
      destination: "",
      start_date: ''
    });
    setMatchingResults({
      destination: "",
      date: "",
    });
    setPrice('');
    setStock('')
    dispatch(getPackages());
  };

  return (
    <div className="container d-flex align-items-center justify-content-center mt-6">
      <div className="row">
        <div className="row">
        <div className="col-6 mb-4">
          <div className="row mb-2">
            <label>Destino: </label>
          </div>
          <div className="row mb-2">
            <AutocompleteSearch 
              fieldInput={cities?.map(e=>e.name)} 
              input={destinationCity} 
              setInput={setDestinationCity}
              setDestination={(dest)=> setValues({...values, destination: dest})}
            />
            {/* <input
              type="text"
              placeholder="Destino"
              value={values.destination}
              onChange={handleDestination}
              /> */}
          </div>
        </div>
        <div className="col-4 mb-4">
          <div className="row mb-2">
            <label>Ida:</label>
          </div>
          <DatePicker
            onChange={setStartDate}
            onBlur={handleDates}
            value={startDate === null ? "" : startDate}
            dayPlaceholder={"DD"}
            monthPlaceholder={"MM"}
            yearPlaceholder={"YYYY"}
            format={"dd-MM-y"}
            minDate={new Date()}
            />
        </div>
        <div className="col-2 mb-4">
          <div className="row mb-2">
            <label>Pasajeros:</label>
          </div>
          <div className="row mb-2">
            <input
              type="text"
              placeholder="Pasajeros"
              onChange={handlePassenger}
              />
          </div>
        </div>
        </div>
        <div className="row">
          <div className="row col-sm-12 col-md-12 col-lg-12 justify-content-center">
            <div className="col-4 mb-4">
              <button className="btn btn-success" onClick={handleSearch}>
                Buscar 🔎 
              </button>
            </div>
            <div className="col-4 mb-4">
              <button className="btn btn-success" onClick={handleClear}>
                Limpiar búsqueda
              </button>
            </div>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-12 align-self-center">
            {matchingResults.destination && matchingResults.date ? (
              <h3>
                {matchingResults.destination} ↪ {matchingResults.date}{" "}
              </h3>
            ) : matchingResults.destination.length ? (
              <h3>{matchingResults.destination}</h3>
            ) : matchingResults.date.length ? (
              <h3>{matchingResults.date}</h3>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
