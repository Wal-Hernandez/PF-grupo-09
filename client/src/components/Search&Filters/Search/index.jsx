import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { filterByDate } from "../../../redux/actions/filterByDate&Dest";
import { filterPassenger } from "../../../redux/actions/filterByDateReturn";
import { getPackages } from "../../../redux/actions/getPackages";
import AutocompleteSearch from "./AutocompleteSearch";

function Search({ startDate, setStartDate, cities, setCity, price, stock, setPrice, setStock, setCurrentPage, setActivity }) {
  const dispatch = useDispatch();
  const [destinationCity, setDestinationCity] = useState('');
  const [values, setValues] = useState({
    destination: '',
    start_date: startDate,
  });
 console.log("valores",values)
  const [matchingResults, setMatchingResults] = useState({
    destination: "",
    date: "",
  });

  const handleDates = () => {
    setValues({
      ...values,
      start_date: startDate ? startDate?.toISOString() : "",
    });
  };

  const handleSearch = (e) => {
    const {destination, start_date } = values;
    e.preventDefault();
    dispatch(filterByDate(destination, start_date, price, stock));
    setCity(destinationCity);
    setMatchingResults({
      destination: destination.toUpperCase(),
      date: startDate && new Date(start_date).toDateString(),
    });
    setCurrentPage(1)
  };
  const handleClear = (e) => {
    e.preventDefault();
    setStartDate("");
    setDestinationCity("");
    setCity("");
    setValues({
      ...values,
      destination: "",
      start_date: ''
    });
    setMatchingResults({
      destination: "",
      date: "",
     
    });
    setPrice("");
    setStock("");
    setActivity('')
    dispatch(getPackages());
  };

  const handlePassengerClick = (e) => {
    e.preventDefault();
    dispatch(filterPassenger(values.passengers));
  };

  return (
    
      <div className="searchAndDateAndBtn">
        <div className="searchAndDate">
              <AutocompleteSearch
                fieldInput={cities && cities?.map((e) => e.name)}
                input={destinationCity}
                setInput={setDestinationCity}
                setDestination={(dest) =>
                  setValues({ ...values, destination: dest })
                }
              />
            <div>
              <p className="title-fecha">Buscar por fecha</p>
            <DatePicker
            className="holll"
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
        </div>
        <div className="btnssearchfilter">
            <div className="">
              <button className="btnsearch" onClick={handleSearch}>
              <span class="material-symbols-outlined">
                search
                </span>
              </button>
            </div>
            <div className="">
              <button className="btnsearch" onClick={handleClear}>

                <span class="material-symbols-outlined">
                mop
                </span>
              </button>
              </div>
        </div>
      </div>

  );
}

export default Search;

{/* <div className="col col-sm-12 col-md-6 col-lg-12 align-self-center">
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
</div> */}