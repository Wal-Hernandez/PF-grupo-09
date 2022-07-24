import React from "react";
import { useDispatch, useSelector} from 'react-redux';
import "./adminView.css";
import { Link } from "react-router-dom";
import { getPackages } from '../../redux/actions/getPackages';
import { getCities} from '../../redux/actions/getCities';

function Admin() {
  const {adminView} = useSelector((state) => state)
  const dispatch = useDispatch();

  function handlePackage(e) {
    e.preventDefault();
    dispatch(getPackages());
  }
  function handleCity(e){
     e.preventDefault();
     dispatch(getCities())
  }
  
  return (
    <>
    <div className="adminViewMainContainer">
      <div className="adminViewContainerRoutes">
        <div><Link to='/admin/packages'><button onClick={handlePackage}>Paquetes</button></Link> </div>
        <div><Link to='/admin/hotels'><button>Hoteles</button> </Link></div>
        <div><Link to='/admin/buses'><button>Bus</button></Link></div>
        <div><Link to='/admin/acitivies'><button>Activites</button></Link></div>
        <div><Link to='/admin/cities'><button onClick={handleCity}>City</button></Link></div>
        <div><Link to='/admin/platforms'><button>platforms</button></Link></div>
      </div>
      <div className="adminViewContainer">
        <div className="adminPanelTitle">
          <div className="titleView">AdminView </div><div className="btnAdd">
            <Link to ="/admin/create">
          <button>ADD</button></Link></div>
        </div>
        <div className="adminPanelContainer">
          {adminView.length 
          ? ( 
          adminView.map( e => {
            return (
              <>
              <div className="adminPanelColumn">
                    <div className="text">
                      <h1>{e.name}</h1>
                    </div>
                    <div className="btnEdit"><Link to={`/admin/edit/${e.id}`}>
                      <button>Edit</button></Link>
                    </div>
                    <div className="btnDel">
                      <button>X</button>
                    </div>
                  </div>
               
                  </>
              
            )


          })
     
          ) 
          : (<div>Loading..</div>)}
        </div>
      </div>
      </div>
    </>
  );
}

export default Admin;
