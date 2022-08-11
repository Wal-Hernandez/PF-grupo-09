import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { loadShopping } from '../../redux/actions/loadShopping';
import {finishTravel} from '../../redux/actions/finishTravel';
import './Profile.css'
import Reviews from '../Reviews';
import Footer from '../Footer'
import StarRating from "../StarRatings/index"
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
            
            </div>
          </div>
          <div class="col-md-3">
          <button class="btnfinaliza" onClick={()=>dispatch(finishTravel(data.id,userlog?.email))} className='btn btn-warning'>Simular Finalizacion</button>
           
          </div>
          <div></div>
        </div>
      </div>
                </div>
              ))
            )
          : ""}
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