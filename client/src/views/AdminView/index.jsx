import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./adminView.css";
import { Link, useNavigate } from "react-router-dom";
import { getPackages } from "../../redux/actions/getPackages";
import { getCities } from "../../redux/actions/getCities";
import { getBuses } from "../../redux/actions/getBuses";
import { getHotels } from "../../redux/actions/getHotels";
import { getPlatforms } from "../../redux/actions/getPlatforms";
import { getActivities } from "../../redux/actions/getActivities";
import { deleteModel } from "../../redux/actions/deleteModel";
import { CreateForm } from "./Forms/CreateForm";
import { useAuth } from "../../context/context";

function Admin() {
  const [model, setModel] = React.useState("");
  const [add,setAdd] = React.useState(false);
  console.log(add)
  const { adminView } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handlePackage(e) {
    e.preventDefault();
     setAdd(add=>false);
    setModel(e.target.name);
    dispatch(getPackages());
    
  }
  function handleCity(e) {
    e.preventDefault();
    setAdd(add=>false);
    setModel(e.target.name);
    dispatch(getCities());
    
  }
  function handleBus(e) {
    e.preventDefault();
    setAdd(add=>false);
    setModel(e.target.name);
    dispatch(getBuses());
    
  }

  function handleHotel(e) {
    e.preventDefault();
    setAdd(add=>false);
    setModel(e.target.name);
    dispatch(getHotels());
    
  }

  function handlePlattform(e) {
    e.preventDefault();
    setAdd(add=>false);
    setModel(e.target.name);
    dispatch(getPlatforms());
    
  }

  function handleActivities(e) {
    e.preventDefault();
    setAdd(add=>false);
    setModel(e.target.name);
    console.log(model);
    dispatch(getActivities());
  }

  function handleDelete(e) {
    setModel(e.target.name);
    let resp = window.confirm("Confirmar acción.");
    if (resp) dispatch(deleteModel(e.target.value, model));
    navigate("/admin");
  }
let setCreate =() =>{ setAdd(add => !add) }
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
    <div>
      <button
          className="bg-slate-200 hover:bg-slate-300 rounded py-2 px-4 text-black"
          onClick={handleLogout}>
          logout
        </button></div>
      <div className="adminViewMainContainer">
        <div className="adminViewContainerRoutes">
          <div>
            <Link to="/admin/packages">
              <button name="packages" onClick={handlePackage}>
                Paquetes
              </button>
            </Link>{" "}
          </div>
          <div>
            <Link to="/admin/hotels">
              <button name="hotels" onClick={handleHotel}>
                Hoteles
              </button>{" "}
            </Link>
          </div>
          <div>
            <Link to="/admin/buses">
              <button name="business" onClick={handleBus}>
                Bus
              </button>
            </Link>
          </div>
          <div>
            <Link to="/admin/acitivies">
              <button name="activities" onClick={handleActivities}>
                Activites
              </button>
            </Link>
          </div>
          <div>
            <Link to="/admin/cities">
              <button name="cities" onClick={handleCity}>
                City
              </button>
            </Link>
          </div>
          <div>
            <Link to="/admin/platforms">
              <button name="plattforms" onClick={handlePlattform}>
                platforms
              </button>
            </Link>
          </div>
      </div>
      
      <div className="adminViewContainer">
        <div className="adminPanelTitle">
          <div className="titleView">AdminView </div><div className="btnAdd">
            
          <button onClick={setCreate} >ADD</button></div>
        </div>

       
          <div className="adminPanelContainer">
            {add? <div> <CreateForm word={model}/></div>:adminView.length ? (
              adminView.map((e) => {
                return (
                  <>
                    <div className="adminPanelColumn">
                      <div className="text">
                        <h1>{e.name || e.patent || e.terminal}</h1>
                        <h1>{e.seating}</h1>
                      </div>
                      <div className="btnEdit">
                        <Link to={`/admin/edit/${model}/${e.id}`}>
                          <button>Edit</button>
                        </Link>
                      </div>
                      <div className="btnDel">
                        <button value={e.id} onClick={handleDelete}>
                          X
                        </button>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <div>Loading..</div>
            )}
            {/* {add? <div> <CreateForm/></div>: <p>holis</p>} */}
          </div>
        </div>
        </div>
    
    </>
  );
}

export default Admin;
