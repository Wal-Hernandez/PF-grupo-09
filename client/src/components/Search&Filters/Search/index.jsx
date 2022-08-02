import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { filterByDate } from "../../../redux/actions/filterByDate&Dest";
import { getPackages } from "../../../redux/actions/getPackages";

function Search({startDate, setStartDate}) {

  const dispatch = useDispatch();
  const [values, setValues] = useState({
    destination: '',
    start_date: startDate,
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

  const handleDates = () => {
    setValues({
      ...values,
      start_date: startDate ? startDate?.toISOString() : '',
    });
  };

  const handleSearch = (e)=>{
    const {destination, start_date} = values
    e.preventDefault()
    dispatch(filterByDate(destination, start_date))
    setMatchingResults([destination.toUpperCase(), new Date(start_date).toDateString()])
  }
  const handleClear = (e)=>{
    e.preventDefault()
    setStartDate('')
    setValues({
      ...values,
      destination: ''
    })
    setMatchingResults([])
    dispatch(getPackages())
  }



  return (

  <div className="container d-flex align-items-center mt-5">
    <div className="row">
        <div className="col-12 mb-4">
          <div className="row mb-4">
              <label>Destino: </label>
          </div>
          <div className="row mb-4">
          <input type="text"
              placeholder="Destino" 
              value={values.destination} 
              onChange={handleDestination}
            />
          </div>
            
        </div>
        <div className="col-12 mb-4">
            <label>
              Ida:
            </label>
            <DatePicker
              onChange={setStartDate}
              onBlur={handleDates}
              value={startDate === null ? '' : startDate}
              dayPlaceholder={"DD"}
              monthPlaceholder={"MM"}
              yearPlaceholder={"YYYY"}
              format={"dd-MM-y"}
              minDate={new Date()}
            />
        </div>
        <div className="col col-sm-12 col-md-6 col-lg-6 mb-4">
          <label>
           Pasajeros:
          </label>
          <input type="text" 
            placeholder="Pasajeros" 
            onChange={handlePassenger} 
          />
        </div>
        <div className="row">
           <div className="col col-sm-12 col-md-6 col-lg-6">
            <div className="row mb-4">
            <button className="btn btn-success" onClick={handleSearch}>Buscar</button>
            </div>
            <div className="row mb-4">
            <button className="btn btn-success" onClick={handleClear}>Limpiar búsqueda</button>
            </div>
    
           </div>
           <div className="col col-sm-12 col-md-6 col-lg-6">
          <h3>{matchingResults[0]} ↪ {matchingResults[1]}</h3>
          </div>
        </div>
    </div>
  </div>
  
  );
}

export default Search;
