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
  const [pack, setPack] = React.useState({});
  const { adminView } = useSelector((state) => state);
  const dispatch = useDispatch();

  function dispatchByName(name){
      if(name === "hotels") dispatch(getHotels());
      else if(name === "packages")dispatch(getPackages());
      else if(name === "business")dispatch(getBuses());
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
    setPagC(()=>1)
  }

  async function handleDelete (e) {
    let resp = window.confirm("Confirmar acción.");
    if (resp){ await dispatch(deleteModel(e.target.value, model));
    } 
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


  let setUpdate = (packs) => {
    setPack(packs)
    setEdit((edit) => !edit);
  };
  
  let handleReset = () => {
    setPack(false)
    setEdit(false);
  };
console.log(adminView)
//Paginado Normal
const [pageCurrent,setPagC] = React.useState(1);

let itemsPerPage=5;
function setPagination(event) {
  setPagC(
    pageCurrent => Number(event.target.id)
  )

};
let indiceFinal = pageCurrent * itemsPerPage;
  let indiceInicial = indiceFinal - itemsPerPage;

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(adminView.length/ itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  let numerosRenderizados = pageNumbers.map(number => {
   return (
     <button
       key={number}
       id={number}
       onClick={setPagination}
      style={number === pageCurrent?{backgroundColor:'#80dae6'}:{backgroundColor:'#8bffe7'}}
     >
       {number}
     </button>
   );
 });

//Prev y Next
const[paginado, setPaginado] = React.useState(0);

let pageLimit =10;/// porque si, vamos de 10 en 10 
//Definamos dos funciones mas, prev y next
function prevPage(){
  setPagC(
    pageCurrent =>{
      if(pageCurrent>1){
        return pageCurrent-1;
      } return 1;

    }
  );
  setPaginado( paginado =>{if (pageCurrent>1){
 return Math.floor((pageCurrent-2) / pageLimit)
  } return 0;
 }   
 )
  
};
function nextPage(){
  setPagC(
    pageCurrent =>{if(pageCurrent<pageNumbers.length){
      return pageCurrent+1
    }
      return pageNumbers.length; 
     }
  )
  setPaginado( paginado => Math.floor((pageCurrent) / pageLimit))
};
let sliceOfnumerosRederizados= numerosRenderizados.slice((pageLimit*paginado),(pageLimit*(paginado+1)));



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
              <button name="business" onClick={handleSelect}>
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
            {adminView.length && !add && !edit? <p>Page {pageCurrent}/{pageNumbers.length} from {adminView.length} results</p>: ''}
          </div>

          <div className="adminPanelContainer">
            {}
            {add 
            ? (
              <div>
                {" "}
                <CreateForm word={model} />
                <button  onClick={handleReset}>Volver</button>
              </div>
            ) 
            : edit 
              ? (
                <div>
                {" "}
                <EditForm word={model} pack={pack}/>
                <button  onClick={handleReset}>Volver</button>
              </div>
                )
              :(adminView.length 
                 ? (
                  adminView.map((packs) => {
                       return (
                     
                        <div className="adminPanelColumn" key={packs.id}>
                         <div className="text">
                           <h1>{packs.name || packs.patent || packs.terminal}</h1>
                           
                          </div>
                          <div className="btnEdit">

                             <button onClick={() => {setUpdate(packs)}}>Edit</button>
                          </div>
                          <div className="btnDel">
                            <button value={packs.id} onClick={handleDelete}>
                              X
                            </button>
                          </div>
                       </div>
                  
                        );
                      }).slice(indiceInicial, indiceFinal)
                      
                    ) 
                  : (
              <div>Loading..</div>
                ))}
            {adminView.length && !add && !edit? <div>{pageCurrent>1?<span onClick={prevPage} className='flecha izquierda'></span>:''} 
            {sliceOfnumerosRederizados} 
            {pageCurrent<pageNumbers.length?<span onClick={nextPage} className='flecha derecha'></span>:''}</div>: ''}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
