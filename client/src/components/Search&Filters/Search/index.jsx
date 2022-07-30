import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { filterByDate } from "../../../redux/actions/filterByDateStart";

function Search({startDate, setStartDate, endDate, setEndDate}) {

  const dispatch = useDispatch();
  const [values, setValues] = useState({
    destination: '',
    start_date: startDate,
    end_date: endDate,
    passengers: 0
  });

  const [matchingResults, setMatchingResults] = useState([]);

  const handleDestination = (e)=>{
    setValues({
      ...values,
      destination: e.target.value
    })
  }
  const handlePassenger = (e)=>{
    setValues({
      ...values,
      passengers: e.target.value
    })
  }

  const handleDates = ()=>{
    setValues({
      ...values,
      start_date: startDate !== '' ? startDate?.toISOString().substring(0, 10) : new Date(),
      end_date: endDate !== '' ? endDate?.toISOString().substring(0, 10) : new Date()
    })
  }

  const handleSearch = (e)=>{
    const {destination, start_date, end_date} = values
    e.preventDefault()
    dispatch(filterByDate(destination, start_date, end_date))
    setMatchingResults([destination.toUpperCase(), new Date(start_date).toDateString(), new Date(end_date).toDateString()])
  }
  const handleClear = (e)=>{
    e.preventDefault()
    setStartDate('')
    setEndDate('')
    setValues({
      ...values,
      destination: ''
    })
    setMatchingResults([])
  }



  return (
    <>
    <div>
      <label>
        Destino:
        <input type="text" placeholder="Destino" value={values.destination} onChange={handleDestination}/>
      </label>
      <label>
        Ida:
        <DatePicker
          onChange={setStartDate}
          onBlur={handleDates}
          value={startDate || ""}
          dayPlaceholder={"DD"}
          monthPlaceholder={"MM"}
          yearPlaceholder={"YYYY"}
          format={"dd-MM-y"}
          minDate={new Date()}
          />
      </label>
      <label>
        Vuelta:
        <DatePicker
          onChange={setEndDate}
          onBlur={handleDates}
          value={endDate || ""}
          dayPlaceholder={"DD"}
          monthPlaceholder={"MM"}
          yearPlaceholder={"YYYY"}
          format={"dd-MM-y"}
          minDate={startDate !== '' ? startDate : new Date()}
          />
      </label>
      <label>
        Pasajeros:
        <input type="text" placeholder="Pasajeros" onChange={handlePassenger} />
      </label>
      <button onClick={handleSearch}>Buscar</button>
      <button onClick={handleClear}>Limpiar búsqueda</button>
    </div>
    <div>
      <h3>{matchingResults[0]}</h3>
      <h3>{matchingResults[1]} ↪ {matchingResults[2]}</h3>
    </div>
    </>
  );
}

export default Search;
