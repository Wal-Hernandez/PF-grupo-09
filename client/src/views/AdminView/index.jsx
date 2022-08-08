import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./adminView.css";
import { getPackages } from "../../redux/actions/getPackages";
import { getCities } from "../../redux/actions/getCities";
import { getBuses } from "../../redux/actions/getBuses";
import { getHotels } from "../../redux/actions/getHotels";
import { getPlatforms } from "../../redux/actions/getPlatforms";
import { getActivities } from "../../redux/actions/getActivities";
import { deleteModel } from "../../redux/actions/deleteModel";
import { getUserForAdmin } from "../../redux/actions/getUserByAdmin";
import { CreateForm } from "./Forms/CreateForm";
import { useAuth } from "../../context/context";
import Logo from "../../images/Buspack.png"
import { EditForm } from "./Forms/EditForm";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Admin() {
  const [model, setModel] = React.useState("");
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [pack, setPack] = React.useState({});
  const { adminView } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  function dispatchByName(name){
      if(name === "hotels") dispatch(getHotels());
      else if(name === "packages")dispatch(getPackages());
      else if(name === "business")dispatch(getBuses());
      else if(name === "activities")dispatch(getActivities());
      else if(name === "cities")dispatch(getCities());
      else if(name === "plattforms")dispatch(getPlatforms());
      else if(name === "users")dispatch(getUserForAdmin());
  };

  function handleSelect(e) {
    e.preventDefault();
    setAdd((add) => false);
    setEdit((edit) => false);
    setModel(e.target.name);
    dispatchByName(e.target.name)
    setPagC(() => 1)
  }

  async function handleDelete(e) {
    console.log(e.target.value)
    swal({
      title: "Confirmar accion",
      text: "Una vez eliminado, no se podrá recuperar este elemento",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteModel(e.target.value, model));
          dispatchByName(model);
          swal("Elemento borrado con éxito", {
            icon: "success",
          });
        } else {
          swal("El elemento no ha sido borrado", {
            icon: "success",
          });
        }
      });
  }
  let setCreate = () => { setAdd(add => !add) }

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

  let handleReset = (e) => {
    dispatchByName(e.target.name)
    setAdd(false)
    setPack(false)
    setEdit(false);
  };
  console.log(adminView)
  //Paginado Normal
  const [pageCurrent, setPagC] = React.useState(1);

  let itemsPerPage = 5;
  function setPagination(event) {
    setPagC(
      pageCurrent => Number(event.target.id)
    )

  };
  let indiceFinal = pageCurrent * itemsPerPage;
  let indiceInicial = indiceFinal - itemsPerPage;

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(adminView.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  let numerosRenderizados = pageNumbers.map(number => {
    return (
      <button
        key={number}
        id={number}
        onClick={setPagination}
        style={number === pageCurrent ? { backgroundColor: '#FFDE59' } : { backgroundColor: '#00000000' }}
        className="btn-pag"
      >
        {number}
      </button>
    );
  });

  //Prev y Next
  const [paginado, setPaginado] = React.useState(0);

  let pageLimit = 10;/// porque si, vamos de 10 en 10 
  //Definamos dos funciones mas, prev y next
  function prevPage() {
    setPagC(
      pageCurrent => {
        if (pageCurrent > 1) {
          return pageCurrent - 1;
        } return 1;

      }
    );
    setPaginado(paginado => {
      if (pageCurrent > 1) {
        return Math.floor((pageCurrent - 2) / pageLimit)
      } return 0;
    }
    )

  };
  function nextPage() {
    setPagC(
      pageCurrent => {
        if (pageCurrent < pageNumbers.length) {
          return pageCurrent + 1
        }
        return pageNumbers.length;
      }
    )
    setPaginado(paginado => Math.floor((pageCurrent) / pageLimit))
  };
  let sliceOfnumerosRederizados = numerosRenderizados.slice((pageLimit * paginado), (pageLimit * (paginado + 1)));



  console.log("hola", adminView)
  useEffect(() => {
    return () => {
    }
  }, [])
  return (
    <>

      <div className="adminViewMainContainer">
        <div className="adminViewContainerRoutes">
          <div className="logout">
            <Link to="/">
              <img src={Logo} alt="buspack" />
            </Link>

            <button
              className="btn-logout"
              onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="btns">
            <div className="btn-pack btnn">
              <button name="packages" onClick={handleSelect}>
                Paquetes
              </button>
            </div  >
            <div className="btn-hotels btnn">
              <button name="hotels" onClick={handleSelect}>
                Hoteles
              </button>{" "}
            </div>
            <div className="btn-business btnn">
              <button name="business" onClick={handleSelect}>
                Business
              </button>
            </div>
            <div className="btn-activities btnn">
              <button name="activities" onClick={handleSelect}>
                Activites
              </button>
            </div>
            <div className="btn-cites btnn">
              <button name="cities" onClick={handleSelect}>
                City
              </button>
            </div>
            <div className="btn-plattforms btnn">
              <button name="plattforms" onClick={handleSelect}>
                Platforms
              </button>
            </div>
          </div>
          <hr/>
          <div>Stadistics</div>
          <div className="btn-plattforms btnn">
              <button name="users" onClick={handleSelect}>
                Users
              </button>     
          </div>
        </div>

        <div className="adminViewContainer">
          <div className="adminPanelTitle">
            <div className="btnAdd">
              <button onClick={setCreate}>
                <span class="material-symbols-outlined">
                  add
                </span>
              </button>
            </div>
            {adminView.length && !add && !edit ? <p className="pag-info">{adminView.length} results</p> : ''}
          </div>

          <div className="adminPanelContainer">
            { }
            {add
              ? (
                <div>
                  {" "}
                  <CreateForm word={model} />
                  <button className="btn btn-warning" name={model} onClick={handleReset}>Volver</button>
                </div>
              )
              : edit
                ? (
                  <div>
                    {" "}
                    <EditForm word={model} pack={pack} />
                    <button className="btn btn-warning" name={model} onClick={handleReset}>Volver</button>
                  </div>
                )
                : (adminView.length
                  ? (
                    adminView.map((packs) => {
                      return model === "users" ? ( <div>
                        <a class="btn btn-info w-100 p-3" data-bs-toggle="collapse" href={`#multiCollapseExample1${packs.nombre}`} role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <div class="adminPanelColumn w-100" key={packs.id}>

                          <div className="text">
                            <h1>{packs.name || packs.patent || packs.terminal || packs.apellido}</h1>
                          </div>
                          <div className="btns-admin">
                            <div className="btnEdit">
                              <button onClick={() => { setUpdate(packs) }}>
                                <span class="material-symbols-outlined">
                                  edit
                                </span>
                              </button>
                            </div>
                            <div className="btnDel">

                              <span class="material-symbols-outlined">
                                <button value={packs.id} onClick={handleDelete} >
                                  delete
                                </button>
                              </span>

                            </div>
                          </div>
                        </div>
                        </a>
                        <div class="col">
                             <div class="collapse " id={`multiCollapseExample1${packs.nombre}`}>
                              <div class="d-flex flex-row d-inline-block bg-dark" id="divCont">
                               <div class="card card-body h-100 w-50 rounded-0 ">
                                <b>Detalles de Carrito</b>
                              {packs.usuarioDB?.carts?.length ? (packs.usuarioDB.carts[0]?.cartDetails?.map(e => (<h1>{e.packageId}</h1>))) : <div>Usuario sin carrito</div>}
                               </div>
                               <div class="card card-body h-100 w-50 rounded-0 border-left border-info">
                                <b>REVIEWS</b>
                                {packs.reviews ? packs.reviews?.map(e => <h1>{e.title}</h1>) : <div>No hay reviews</div>}
                               </div>
                        </div>
                       </div>
                        </div>
                        </div>) : (
                        
                        <div>
                        <a class="btn btn-info w-100 p-3" data-bs-toggle="collapse" href={`#multiCollapseExample1${packs.name}`} role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                        <div class="adminPanelColumn w-100" key={packs.id}>

                          <div className="text">
                            <h1>{packs.name || packs.patent || packs.terminal}</h1>
                          </div>
                          <div className="btns-admin">
                            <div className="btnEdit">
                              <button onClick={() => { setUpdate(packs) }}>
                                <span class="material-symbols-outlined">
                                  edit
                                </span>
                              </button>
                            </div>
                            <div className="btnDel">

                              <span class="material-symbols-outlined">
                                <button value={packs.id} onClick={handleDelete} >
                                  delete
                                </button>
                              </span>

                         </div>
                         </div>
                         </div>
                         </a>
                         </div>
                      )
                    }).slice(indiceInicial, indiceFinal)

                  )
                  : (
                    <div>WELCOME TO THE ADMIN PANEL </div>
                  ))}
            {adminView.length && !add && !edit ? <div className="pag">{pageCurrent > 1 ? <span onClick={prevPage} className='flecha izquierda'></span> : ''}
              {sliceOfnumerosRederizados}
              {pageCurrent < pageNumbers.length ? <span onClick={nextPage} className='flecha derecha'></span> : ''}</div> : ''}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
