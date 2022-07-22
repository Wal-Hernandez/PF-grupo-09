import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import "./homeBody.css";
import { useDispatch, useSelector} from 'react-redux';
import { getPackages } from '../../redux/actions/getPackages';
import { getMainPackages } from '../../redux/actions/getMainPackages';

export default function HomeBody() {
  const {packages,showPackages} = useSelector((state) => state)
  const dispatch = useDispatch();

  useEffect(() => {
    if(!packages.length){
      dispatch(getPackages()); dispatch(getMainPackages())
    } else{
      console.log("todo ok")
    }
  
}, [dispatch, packages,showPackages]);
 
  return (<>
    <div className="homeViewContainer">
    <div><h1>Ofertas</h1></div>
    <div className='mainViewContainer'>
      
      {showPackages.length ? (showPackages.map(e => {
        return(
            <Link to='/services'>
        <div>
          <div>{e.name}</div>
          <img classname="mainViewImg" src={e.hotel.urlImage}/>
        </div>
        </Link>
       )
      })) : (<div> loading</div>)}
     
 
    </div>
  </div>
  </>
  )
}
