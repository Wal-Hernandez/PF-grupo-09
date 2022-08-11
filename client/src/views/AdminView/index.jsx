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
import { enableModel } from "../../redux/actions/enableModel";
import { getUserForAdmin } from "../../redux/actions/getUserByAdmin";
import { CreateForm } from "./Forms/CreateForm";
import { useAuth } from "../../context/context";
import Logo from "../../images/Buspack.png";
import { EditForm } from "./Forms/EditForm";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deleteReview } from "../../redux/actions/deleteReview";
import Stadistic from "../../components/Stadistic";

function Admin() {
  const [model, setModel] = React.useState("");
  const [add, setAdd] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [pack, setPack] = React.useState({});
  const { adminView, packages } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  function dispatchByName(name) {
    if (name === "hotels") dispatch(getHotels());
    else if (name === "packages") dispatch(getPackages());
    else if (name === "business") dispatch(getBuses());
    else if (name === "activities") dispatch(getActivities());
    else if (name === "cities") dispatch(getCities());
    else if (name === "plattforms") dispatch(getPlatforms());
    else if (name === "users") {
      dispatch(getUserForAdmin())
      dispatch(getPackages())
    };
  }


  function handleSelect(e) {
    e.preventDefault();
    setAdd((add) => false);
    setEdit((edit) => false);
    setModel(e.target.name);
    dispatchByName(e.target.name);
    setPagC(() => 1);
  }

  async function handleDelete(e) {
    console.log(e.target.value);
    
     await swal({
      title: "Confirmar accion",
      text: "El elemento se borrara",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {

        await dispatch(enableModel(e.target.value, model));
        //dispatch(deleteModel(e.target.value, model));
        
        swal( {
          title:"Elemento borrado con éxito",
          icon: "success",
        });
  
      } else {
        swal( {
          title:"El elemento no ha sido borrado",
          icon: "success",
        });
      }
    }).then( (e) =>  dispatchByName(model)
    )}
    
      
  let setCreate = () => {
    setAdd((add) => !add);
  };

  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  let setUpdate = (packs) => {
    setPack(packs);
    setEdit((edit) => !edit);
  };

  let handleReset = (e) => {
    dispatchByName(e.target.name);
    setAdd(false);
    setPack(false);
    setEdit(false);
  };
  console.log(adminView);
  //Paginado Normal
  const [pageCurrent, setPagC] = React.useState(1);

  let itemsPerPage = 4;
  function setPagination(event) {
    setPagC((pageCurrent) => Number(event.target.id));
  }
  let indiceFinal = pageCurrent * itemsPerPage;
  let indiceInicial = indiceFinal - itemsPerPage;

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(adminView.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  let numerosRenderizados = pageNumbers.map((number) => {
    return (
      <button
        key={number}
        id={number}
        onClick={setPagination}
        style={
          number === pageCurrent
            ? { backgroundColor: "#FFDE59" }
            : { backgroundColor: "#00000000" }
        }
        className="btn-pag"
      >
        {number}
      </button>
    );
  });

  //Prev y Next
  const [paginado, setPaginado] = React.useState(0);

  let pageLimit = 10; /// porque si, vamos de 10 en 10
  //Definamos dos funciones mas, prev y next
  function prevPage() {
    setPagC((pageCurrent) => {
      if (pageCurrent > 1) {
        return pageCurrent - 1;
      }
      return 1;
    });
    setPaginado((paginado) => {
      if (pageCurrent > 1) {
        return Math.floor((pageCurrent - 2) / pageLimit);
      }
      return 0;
    });
  }
  function nextPage() {
    setPagC((pageCurrent) => {
      if (pageCurrent < pageNumbers.length) {
        return pageCurrent + 1;
      }
      return pageNumbers.length;
    });
    setPaginado((paginado) => Math.floor(pageCurrent / pageLimit));
  }
  let sliceOfnumerosRederizados = numerosRenderizados.slice(
    pageLimit * paginado,
    pageLimit * (paginado + 1)
  );

  console.log("hola", adminView);
  useEffect(() => {
    return () => { };
  }, []);
  return (
    <>
      <div className="adminViewMainContainer">
        <div className="adminViewContainerRoutes">
          <div className="logout">
            <Link to="/">
              <img src={Logo} alt="buspack" />
            </Link>

            <button className="btn-logout" onClick={handleLogout}>
              Cerrar Sesion
            </button>
          </div>
          <div className="btns">

            <div className="btn-pack btnn" style={model === 'packages' ? { backgroundColor: '#FFDE59', position: 'relative', width: '100%' } : { backgroundColor: '#00000000' }}>
              <button name="packages" onClick={handleSelect} style={model === 'packages' ? { backgroundColor: '#FFDE59', position: 'relative' } : { backgroundColor: '#00000000' }}>
                Paquetes
              </button>
            </div >
            <div className="btn-hotels btnn" style={model === 'hotels' ? { backgroundColor: '#FFDE59', position: 'relative', width: '100%' } : { backgroundColor: '#00000000' }}>
              <button name="hotels" onClick={handleSelect} style={model === 'hotels' ? { backgroundColor: '#FFDE59', position: 'relative' } : { backgroundColor: '#00000000' }}>

                Hoteles
              </button>
            </div>
            <div className="btn-business btnn" style={model === 'business'? { backgroundColor: '#FFDE59', position:'relative', width:'100%' } : { backgroundColor: '#00000000' }}>
              <button name="business" onClick={handleSelect} style={model === 'business' ? { backgroundColor: '#FFDE59', position:'relative'} : { backgroundColor: '#00000000' }}>
                Buses
              </button>
            </div>
            <div className="btn-activities btnn" style={model === 'activities'? { backgroundColor: '#FFDE59', position:'relative', width:'100%' } : { backgroundColor: '#00000000' }}>
              <button name="activities" onClick={handleSelect} style={model === 'activities' ? { backgroundColor: '#FFDE59', position:'relative'} : { backgroundColor: '#00000000' }}>
                Actividades
              </button>
            </div>
            <div className="btn-cites btnn" style={model === 'cities'? { backgroundColor: '#FFDE59', position:'relative', width:'100%' } : { backgroundColor: '#00000000' }}>
              <button name="cities" onClick={handleSelect} style={model === 'citiess'? { backgroundColor: '#FFDE59', position:'relative'} : { backgroundColor: '#00000000' }}>
                Ciudades
              </button>
            </div>
            <div className="btn-plattforms btnn" style={model === 'plattforms'? { backgroundColor: '#FFDE59', position:'relative', width:'100%' } : { backgroundColor: '#00000000' }}>
              <button name="plattforms" onClick={handleSelect} style={model === 'plattforms' ? { backgroundColor: '#FFDE59', position:'relative'} : { backgroundColor: '#00000000' }}>
                Plataformas
              </button>
            </div>
          <div className="btn-plattforms btnn" style={model === 'users' ?  { backgroundColor: '#FFDE59', position:'relative', width:'100%' } : { backgroundColor: '#00000000' }}>
              <button name="users" onClick={handleSelect} style={model === 'users' ? { backgroundColor: '#FFDE59', position:'relative'} : { backgroundColor: '#00000000' }}>
                Usuarios
              </button>     
          </div>
          </div>
        </div>

        <div className="adminViewContainer">
          <div className="adminPanelTitle">
          {model !== 'users' ? 
            (<div>
              <div className="btnAdd">
                <button onClick={setCreate}>
                  <span class="material-symbols-outlined">add</span>
                </button>
              </div>
              <h5>Crear</h5>
            </div>) : <></>}

            {adminView.length && !add && !edit ? (
              <p className="pag-info">{adminView.length} Resultados</p>
            ) : (
              ""
            )}
          </div>

          <div className="adminPanelContainer">
            { }
            {add ? (
              <div>
                {" "}
                <CreateForm word={model} />
                <button
                  className="btn btn-warning"
                  name={model}
                  onClick={handleReset}
                >
                  Volver
                </button>
              </div>
            ) : edit ? (
              <div>
                {" "}
                <EditForm word={model} pack={pack} />
                <button
                  className="btn btn-warning"
                  name={model}
                  onClick={handleReset}
                >
                  Volver
                </button>
              </div>
            ) : adminView.length ? (
              adminView
                .map((packs) => {
                  return model === "users" ? (
                    <div>
                      <a
                        class="btn btn-info w-100 p-3"
                        data-bs-toggle="collapse"
                        href={`#multiCollapseExample1${packs.id}`}
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1"
                      >
                        <div class="adminPanelColumn w-100" key={packs.id}>
                          <div className="text">
                            <h1>
                              {packs.name ||
                                packs.patent ||
                                packs.terminal ||
                                packs.apellido}
                            </h1>
                          </div>
                          <div className="btns-admin">
                            <div className="btnEdit">
                              <button
                                onClick={() => {
                                  setUpdate(packs);
                                }}
                              >
                                <span class="material-symbols-outlined">
                                  edit
                                </span>
                              </button>
                            </div>
                            <div className="btnDel">
                              <span class="material-symbols-outlined">
                                <button value={packs.id} onClick={handleDelete}>
                                  delete
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div class="col">
                        <div
                          class="collapse "
                          id={`multiCollapseExample1${packs.id}`}
                        >
                          <div class="d-flex flex-column" id="divCont">
                            {/* <div class="card card-body h-100 w-50 rounded-0 ">
                              <b>Detalles de Carrito</b>
                              {packs.usuarioDB?.carts?.length ? (
                                packs.usuarioDB.carts[0]?.cartDetails?.map(
                                  (e) => <h1>{e.packageId}</h1>
                                )
                              ) : (
                                <div>Usuario sin carrito</div>
                              )}
                            </div> */}
                            <div class="card card-body h-100 w-50 rounded-0 border-left border-info">
                              <b>Reviews a hoteles</b>
                              {packs.usuarioDB?.reviewHotels.length ? (
                                packs.usuarioDB?.reviewHotels.map((r) => (
                                  <div>
                                    <span>
                                      Review para:{" "}
                                      {packages.map((h) =>
                                        h.hotelId === r.hotelId ? (
                                          <span>{h.hotel.name}</span>
                                        ) : null
                                      )}
                                    </span>
                                    <h6>{r.title}</h6>
                                    <p class="card-text">
                                      <small class="text-muted">
                                        {packs.usuarioDB?.mail}
                                      </small>
                                    </p>
                                    <span>{r.comment}</span>
                                    <div className="btns-reviews btnDel-rev">
                                      <span class="material-symbols-outlined">

                                        <button onClick={async () => {

return await swal({
                                            title: "Confirmar accion",
                                            text: "El elemento se borrara",
                                            icon: "warning",
                                            buttons: true,
                                            dangerMode: true,
                                          }).then(async (willDelete) => {
                                            if (willDelete) {
                                      
                                              await dispatch(deleteReview("hotelreviews", r.id))
                                             
                                              swal( {
                                                title:"Elemento borrado con éxito",
                                                icon: "success",
                                              });
                                              dispatchByName(model)
                                            } else {
                                              swal( {
                                                title:"El elemento no ha sido borrado",
                                                icon: "warning",
                                              });
                                            }
                                          })

                                       
                                           }}>
                                          delete
                                        </button>


                                      </span>
                                    </div>
                                    <hr />
                                  </div>
                                ))
                              ) : (
                                <div>No hay reviews</div>
                              )}
                              <b>Reviews a empresas</b>
                              {packs.usuarioDB?.reviewBusinesses.length ? (
                                packs.usuarioDB?.reviewBusinesses.map((r) => (
                                  <div>
                                    <span>
                                      Review para:{" "}
                                      {packages.map((h) =>
                                        h.businessId === r.businessId ? (
                                          <span>{h.business.name}</span>
                                        ) : null
                                      )}
                                    </span>
                                    <h6>{r.title}</h6>
                                    <p class="card-text">
                                      <small class="text-muted">
                                        {packs.usuarioDB?.mail}
                                      </small>
                                    </p>
                                    <span>{r.comment}</span>
                                    <div className="btns-reviews btnDel-rev">
                                      <span class="material-symbols-outlined">
                                      <button onClick={async () => {
                                        return await swal({
                                          title: "Confirmar accion",
                                          text: "El elemento se borrara",
                                          icon: "warning",
                                          buttons: true,
                                          dangerMode: true,
                                        }).then(async (willDelete) => {
                                          if (willDelete) {
                                    
                                            await dispatch(deleteReview("businessreviews", r.id))
                                           
                                            swal( {
                                              title:"Elemento borrado con éxito",
                                              icon: "success",
                                            });
                                            dispatchByName(model)
                                          } else {
                                            swal( {
                                              title:"El elemento no ha sido borrado",
                                              icon: "warning",
                                            });
                                          }
                                        }) }}>
                                          delete
                                        </button>
                                      </span>
                                    </div>
                                    <hr />
                                  </div>
                                ))
                              ) : (
                                <div>No hay reviews</div>
                              )}
                              <b>Reviews a actividades</b>
                              {packages.map((p) =>
                                p.activities?.map((a) => a.reviewActivities)
                              ).length ? (
                                packs.usuarioDB?.reviewActivities.map((r) => (
                                  <div>
                                    <span>
                                      Review para:{" "}
                                      {packages.map((h) =>
                                        h.activities.map((a) =>
                                          a.id === r.activityId ? (
                                            <span>{a.name}</span>
                                          ) : null
                                        )
                                      )}
                                    </span>
                                    <h6>{r.title}</h6>
                                    <p class="card-text">
                                      <small class="text-muted">
                                        {packs.usuarioDB?.mail}
                                      </small>
                                    </p>
                                    <span>{r.comment}</span>
                                    <div className="btns-reviews btnDel-rev">
                                      <span class="material-symbols-outlined">
                                      <button onClick={async () => {
                                       return await swal({
                                        title: "Confirmar accion",
                                        text: "El elemento se borrara",
                                        icon: "warning",
                                        buttons: true,
                                        dangerMode: true,
                                      }).then(async (willDelete) => {
                                        if (willDelete) {
                                  
                                          await dispatch(deleteReview("activityreviews", r.id))
                                         
                                          swal( {
                                            title:"Elemento borrado con éxito",
                                            icon: "success",
                                          });
                                          dispatchByName(model)
                                        } else {
                                          swal( {
                                            title:"El elemento no ha sido borrado",
                                            icon: "warning",
                                          });
                                        }
                                      }) }}>
                                          delete
                                        </button>
                                      </span>
                                    </div>
                                    <hr />
                                  </div>
                                ))
                              ) : (
                                <div>No hay reviews</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : model === "plattforms" ? (
                    <div>
                      <a
                        class="btn btn-info w-100 p-3"
                        data-bs-toggle="collapse"
                        href={`#multiCollapseExample1${packs.id}`}
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1"
                      >
                        <div class="adminPanelColumn w-100" key={packs.id}>
                          <div className="text">
                            <h1>{packs.terminal}</h1>
                          </div>
                          <div className="btns-admin">
                            <div className="btnEdit">
                              <button
                                onClick={() => {
                                  setUpdate(packs);
                                }}
                              >
                                <span class="material-symbols-outlined">
                                  edit
                                </span>
                              </button>
                            </div>
                            <div className="btnDel">
                              <span class="material-symbols-outlined">
                                <button value={packs.id} onClick={handleDelete}>
                                  delete
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ) : (
                    <div>
                      <a
                        class="btn btn-info w-100 p-3"
                        data-bs-toggle="collapse"
                        href={`#multiCollapseExample1${packs.id}`}
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1"
                      >
                        <div
                          class="adminPanelColumn w-100"
                          key={packs.id}
                          style={
                            packs.enabled ? {} : { backgroundColor: "gray" }
                          }
                        >
                          <div
                            className="text"
                            style={
                              packs.enabled ? {} : { backgroundColor: "gray" }
                            }
                          >
                            <h1>
                              {packs.name || packs.patent || packs.terminal}
                            </h1>
                          </div>
                          <div className="btns-admin">
                            <div
                              className="btnEdit"
                              style={
                                packs.enabled ? {} : { backgroundColor: "gray" }
                              }
                            >
                              <button
                                onClick={() => {
                                  setUpdate(packs);
                                }}
                                style={
                                  packs.enabled
                                    ? {}
                                    : { backgroundColor: "gray" }
                                }
                              >
                                <span class="material-symbols-outlined">
                                  edit
                                </span>
                              </button>
                            </div>
                            <div
                              className="btnDel"
                              style={
                                packs.enabled ? {} : { backgroundColor: "gray" }
                              }
                            >
                              <span class="material-symbols-outlined">
                                <button
                                  value={packs.id}
                                  onClick={handleDelete}
                                  style={
                                    packs.enabled
                                      ? {}
                                      : { backgroundColor: "gray" }
                                  }
                                >
                                  delete
                                </button>
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                      {packs.reviewHotels?.length ? (
                        <div class="col">
                          <div
                            class="collapse "
                            id={`multiCollapseExample1${packs.id}`}
                          >
                            <div class="d-flex flex-column" id="divCont">
                              <div class="card card-body h-100 w-50 rounded-0 border-left border-info">
                                <b>Calificación de usuarios: </b>
                                {packs.reviewHotels.length ? (
                                  <h1>
                                    {packs.reviewHotels
                                      ?.map((e) => e.score)
                                      .reduce((a, b) => a + b) /
                                      packs.reviewHotels.length}{" "}
                                    de 5
                                  </h1>
                                ) : (
                                  <div>No hay reviews</div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      {packs.reviewBusinesses?.length ? (
                        <div class="col">
                          <div
                            class="collapse "
                            id={`multiCollapseExample1${packs.id}`}
                          >
                            <div class="d-flex flex-column" id="divCont">
                              <div class="card card-body h-100 w-50 rounded-0 border-left border-info">
                                <b>Calificación de usuarios: </b>
                                {packs.reviewBusinesses.length ? (
                                  <h1>
                                    {packs.reviewBusinesses
                                      ?.map((e) => e.score)
                                      .reduce((a, b) => a + b) /
                                      packs.reviewBusinesses.length}{" "}
                                    de 5
                                  </h1>
                                ) : (
                                  <div>No hay reviews</div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  );
                })
                .slice(indiceInicial, indiceFinal)
            ) : (<>
              <div className="bienvenida">
                <h1>Hola!</h1>
                <h2>Bienvenido al Panel de Administrador </h2>
                <p>Para comenzar elige que elementos de tu pagina quieres editar, crear o eliminar</p>
              </div>
              <Stadistic/>
              </>
            )}
            {adminView.length && !add && !edit ? (
              <div className="pag">
                {pageCurrent > 1 ? (
                  <span onClick={prevPage} class="flecha-nueva material-symbols-outlined">
                    arrow_back_ios
                  </span>
                ) : (
                  ""
                )}
                {sliceOfnumerosRederizados}
                {pageCurrent < pageNumbers.length ? (
                  <span onClick={nextPage} class="flecha-nueva material-symbols-outlined">
                    arrow_forward_ios
                  </span>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;