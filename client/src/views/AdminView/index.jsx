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

function Admin() {
  const [model, setModel] = React.useState("");
  const { adminView } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handlePackage(e) {
    e.preventDefault();

    setModel(e.target.name);
    dispatch(getPackages());
  }
  function handleCity(e) {
    e.preventDefault();
    setModel(e.target.name);
    dispatch(getCities());
  }
  function handleBus(e) {
    e.preventDefault();
    setModel(e.target.name);
    dispatch(getBuses());
  }

  function handleHotel(e) {
    e.preventDefault();
    setModel(e.target.name);
    dispatch(getHotels());
  }

  function handlePlattform(e) {
    e.preventDefault();
    setModel(e.target.name);
    dispatch(getPlatforms());
  }

  function handleActivities(e) {
    e.preventDefault();
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

  return (
    <>
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
              <button name="buses" onClick={handleBus}>
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
              <button name="platforms" onClick={handlePlattform}>
                platforms
              </button>
            </Link>
          </div>
        </div>
        <div className="adminViewContainer">
          <div className="adminPanelTitle">
            <div className="titleView">AdminView </div>
            <div className="btnAdd">
              <Link to="/admin/create">
                <button>ADD</button>
              </Link>
            </div>
          </div>
          <div className="adminPanelContainer">
            {adminView.length ? (
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
