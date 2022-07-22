import React from 'react'
import "./productos.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export default function Productos() {

  const packages = useSelector((state) => state.packages)
  
  return (
    <div>
      {packages.map((e) => {
        return(
          <div key={e.id} className="package-item">
            <Link to={"/details/" + e.id}>
            <div>{e.name}</div>
          <div>{e.start_date}</div>
          <div>{e.end_date}</div>
          <div>{e.price}</div>
          </Link>
          </div>
        )
      })}
    </div>
  )
}

