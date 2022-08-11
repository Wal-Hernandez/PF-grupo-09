import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { loadShopping } from '../../redux/actions/loadShopping';
import {finishTravel} from '../../redux/actions/finishTravel';
import './Profile.css'
import Reviews from '../Reviews';
import StarRating from "../StarRatings/index"
import Footer from '../Footer'
export default function ProfileUser({ userlog }) {
  const dispatch = useDispatch()
  const { shopping } = useSelector(state => state.rootReducer)
  // React.useEffect(
  //   () => { dispatch(loadShopping(userlog?.email)) }, [dispatch]
  // )

  React.useEffect(() => {
    if (userlog?.email !== undefined) {
      dispatch(loadShopping(userlog?.email));
    }
  }, [userlog, dispatch]);


  console.log(shopping)
  const [selected, setSelected] = useState('');
  const [activityId, setActivityId] = useState('');
  const [businessId, setBusinessId] = useState('');
  const [hotelId, setHotelId] = useState('');
  console.log(activityId)
  console.log(businessId)


   


  return (
    <div>
      <Navbar userlog={userlog} />
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      /> */}
      <div>
        <h1>Mis Compras</h1>
        {shopping.length
          ? shopping.filter(cart=>cart.statusCartId==2).map((data) =>
              data?.cartDetails.map((pack) => (
                <div className='container'>
                  {/* <div className='row'>
                  <div className='col-6'>
                <div className="user-card">
                  <p className="title">{pack.package?.name}</p>
                 
                  <label >Actividades</label>
                  <div >
                    {pack.package?.activities?.map((a) => (
                      <div>
                        <p className="title">{a?.name}</p>
                      </div>
                    ))}
                    
                  </div>
                  
                  <label >Empresa</label>
                  <div class="spoiler">
                    <p className="title">{pack.package?.business?.name}</p>
                    
                  </div>
                 
                  <label >Hospedaje</label>
                  <div >
                    <p className="title">{pack.package?.hotel?.name}</p>
                  </div>
                </div>
                </div>
                <div className='col-6'>
                  <button onClick={()=>dispatch(finishTravel(data.id,userlog?.email))} className='btn btn-warning'>Simular Finalizacion</button>
                  </div>
                  </div>  */}
                       <div class="card mb-3 card-detalles-details">
        <div class="row g-0 ">
          <div class="col-md-4 ">
            <img
              src={pack.package?.city.image}
              class="img-fluid rounded-start"
              alt="Image not found"
            />
          </div>
          <div class="col-md-5">
            <div class="card-body info-det">
              <h5 class="card-title title-det">{pack.package?.name}</h5>
              <h6 class="card-title city-det">{pack.package?.city.name} </h6>
              <h6 class="card-title hotel-det">{pack.package?.hotel.name}</h6>
              <h5 className="card-title star">
                <StarRating stars={pack.package?.hotel.stars} />
              </h5>
              <h5>
                {pack.package?.hotel.wifi? (
                  <span class="material-symbols-outlined">wifi</span>
                ) : null}{" "}
                {pack.package?.hotel.pool ? (
                  <span class="material-symbols-outlined">pool</span>
                ) : null}
                {pack.package?.hotel.gym? (
                  <span class="material-symbols-outlined">fitness_center</span>
                ) : null}
              </h5>
              {/* <div className="activites-det">
                <a
                  class="card-title"
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Actividades incluidas
                  <span class="material-symbols-outlined">expand_more</span>
                </a>
                <div class="col">
                  <div class="collapse" id="multiCollapseExample1">
                    <div class="card card-body">
                      <p class="card-text act">
                        {packageActivity ? packageActivity : null}
                      </p>
                    </div>
                  </div>
                </div> */}
                {/* <h6 class="card-title">Actividades incluidas</h6>
        <p class="card-text act">{packageActivity}</p> */}
              {/* </div> */}
            </div>
          </div>
          <div class="col-md-3">
          <button class="btnfinaliza" onClick={()=>dispatch(finishTravel(data.id,userlog?.email))} className='btn btn-warning'>Simular Finalizacion</button>
            {/* <div class="card-body">
              <h4 class="card-title">Precio por persona</h4>
              <h3 class="card-text price-det">$ {pack.package?.price}</h3>
              <p class="card-text fecha">
                Salida:{" "}
                {new Date(packageDetail.start_date).toLocaleString("es-ES")}
              </p>
              <p class="card-text fecha">
                Llegada:{" "}
                {new Date(packageDetail.end_date).toLocaleString("es-ES")}
              </p>
              <p class="card-text stock">
                {" "}
                <small class="text-muted">
                  Stock disponible {packageDetail.stock}
                </small>
              </p>
            </div> */}
            {/* <div className="btn-comprar">
              {paqueteCargado ? (
                <Link to="/shoppingcart">
                  <button className="btn btn-warning">
                    Ver en el Carrito
                    <span class="material-symbols-outlined">
                      shopping_cart_checkout
                    </span>
                  </button>
                </Link>
              ) : (
                <button
                  className="btn btn-warning"
                  onClick={() => addToCart(id)}
                >
                  Agregar al carrito
                  <span class="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                </button>
              )}
            </div> */}
          </div>
          <div></div>
        </div>
      </div>
                </div>
              ))
            )
          :
          ""}
          </div>
          <div className='display-5'>Viajes Finalizados</div>
    
          <div className='container-userProfile'>
            {/* <img src="img.jpg" alt="John" style={{ width: "100%" }} /> */}
            
            
            {shopping.length
              ? shopping.filter(cart=>cart.statusCartId==3).map((data) =>
                  data?.cartDetails.map((pack) => (
                    <div className="cardUserPanel">
                      <p className="cardUserTitle">{pack.package?.name}</p>
                      <input type="checkbox" id={`spoiler${pack.id}`} />
                      <label for={`spoiler${pack.id}`}>Actividades</label>
                      <div class="spoiler">
                        {pack.package?.activities?.map((a) => (
                          <div>
                            <p className="title">{a?.name} <button className='btnUserPanel' onClick={()=>{
                                setActivityId(a.id) 
                                setSelected('activityreviews')
                              }}>Evaluar</button></p>
                          </div>
                        ))}
                        
                      </div>
                      <input type="checkbox" id={`spoiler${pack.id}2`} />
                      <label for={`spoiler${pack.id}2`}>Empresa</label>
                      <div class="spoiler">
                        <p className="title">{pack.package?.business?.name}</p>
                        <button className='btnUserPanel' onClick={()=>{
                          setBusinessId(pack.package?.business.id)
                          setSelected('businessreviews')
                          }}>Evaluar</button>
                      </div>
                      <input type="checkbox" id={`spoiler${pack.id}3`} />
                      <label for={`spoiler${pack.id}3`}>Hospedaje</label>
                      <div class="spoiler">
                        <p className="title">{pack.package?.hotel?.name}</p>
                        <button className='btnUserPanel' onClick={()=>{
                          setHotelId(pack.package?.hotel.id)
                          setSelected('hotelreviews')
                          }}>Evaluar</button>
                      </div>
                    </div>
                    
                  ))
                )
              : ""}
            
          </div>
          <p> Opiniones y Puntajes</p>
              <Reviews hotel={hotelId} activity={activityId} business={businessId} userlog={userlog} selected={selected}/>
          <Footer/>
        </div>
      );
    }