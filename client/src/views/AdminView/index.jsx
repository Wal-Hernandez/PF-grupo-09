import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./adminView.css";
import { getPackages } from "../../redux/actions/getPackages";
import { getCities } from "../../redux/actions/getCities";
import { getBuses } from "../../redux/actions/getBuses";
import { getHotels } from "../../redux/actions/getHotels";
import { getPlatforms } from "../../redux/actions/getPlatforms";
import { getActivities } from "../../redux/actions/getActivities";
import { deleteModel } from "../../redux/actions/deleteModel";
import { CreateForm } from "./Forms/CreateForm";
import { useAuth } from "../../context/context";
import { EditForm } from "./Forms/EditForm";
function Admin() {
  const [model, setModel] = React.useState("");
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [id, setId] = React.useState(0);
  const { adminView } = useSelector((state) => state);
  const dispatch = useDispatch();


  function dispatchByName(name){
      if(name === "hotels") dispatch(getHotels());
      else if(name === "packages")dispatch(getPackages());
      else if(name === "buses")dispatch(getBuses());
      else if(name === "activities")dispatch(getActivities());
      else if(name === "cities")dispatch(getCities());
      else if(name === "plattforms")dispatch(getPlatforms());
  };

  function handleSelect(e) {
    e.preventDefault();
    setAdd((add) => false);
    setEdit((edit) => false);
    setModel(e.target.name);
    dispatchByName(e.target.name)
  }

  async function handleDelete (e) {
    let resp = window.confirm("Confirmar acción.");
    if (resp){ await dispatch(deleteModel(e.target.value, model));
      console.log(model);} 
    dispatchByName(model);
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

  let setUpdate = (id) => {
    setId(id)
    setEdit((edit) => !edit);
  };
console.log(adminView)
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
              <button name="packages" onClick={handleSelect}>
                Paquetes
              </button>
          </div>
          <div>        
              <button name="hotels" onClick={handleSelect}>
                Hoteles
              </button>{" "}
          </div>
          <div>
              <button name="buses" onClick={handleSelect}>
                Bus
              </button>
          </div>
          <div>
              <button name="activities" onClick={handleSelect}>
                Activites
              </button>
          </div>
          <div>
              <button name="cities" onClick={handleSelect}>
                City
              </button>
          </div>
          <div>
              <button name="plattforms" onClick={handleSelect}>
                platforms
              </button>     
          </div>
        </div>

        <div className="adminViewContainer">
          <div className="adminPanelTitle">
            <div className="titleView">AdminView </div>
            <div className="btnAdd">
              <button onClick={setCreate}>ADD</button>
            </div>
          </div>

          <div className="adminPanelContainer">
            {}
            {add 
            ? (
              <div>
                {" "}
                <CreateForm word={model} />
              </div>
            ) 
            : edit 
              ? (
                <div>
                {" "}
                <EditForm word={model} id={id}/>
              </div>
                )
              :(adminView.length 
                 ? (
                  adminView.map((pack) => {
                       return (
                       <>
                        <div className="adminPanelColumn">
                         <div className="text">
                           <h1>{pack.name || pack.patent || pack.terminal}</h1>
                           
                          </div>
                          <div className="btnEdit">
                           {/*  <Link to={`/admin/edit/${model}/${e.id}`}>
                            
                            </Link> */}
                             <button onClick={() => {setUpdate(pack.id)}}>Edit</button>
                          </div>
                          <div className="btnDel">
                            <button value={pack.id} onClick={handleDelete}>
                              X
                            </button>
                          </div>
                       </div>
                     </>
                        );
                      })
                    ) 
                  : (
              <div>Loading..</div>
                ))}
            {/* {add? <div> <CreateForm/></div>: <p>holis</p>} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
