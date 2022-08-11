import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { loadShopping } from '../../redux/actions/loadShopping';
import {finishTravel} from '../../redux/actions/finishTravel';
import './Profile.css'
import Reviews from '../Reviews';
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
                  <div className='row'>
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
                  </div> 
                </div>
              ))
            )
          : ""}
      </div>
      <div>
        {/* <img src="img.jpg" alt="John" style={{ width: "100%" }} /> */}
        <h1 className="title">{userlog?.nombre + " " + userlog?.apellido}</h1>
        <p>Viajes Finalizados</p>
        {shopping.length
          ? shopping.filter(cart=>cart.statusCartId==3).map((data) =>
              data?.cartDetails.map((pack) => (
                <div>

                <div className="user-card">
                  <p className="title">{pack.package?.name}</p>
                  <input type="checkbox" id={`spoiler${pack.id}`} />
                  <label for={`spoiler${pack.id}`}>Actividades</label>
                  <div class="spoiler">
                    {pack.package?.activities?.map((a) => (
                      <div>
                        <p className="title">{a?.name} <button onClick={()=>{
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
                    <button onClick={()=>{
                      setBusinessId(pack.package?.business.id)
                      setSelected('businessreviews')
                    }}>Evaluar</button>
                  </div>
                  <input type="checkbox" id={`spoiler${pack.id}3`} />
                  <label for={`spoiler${pack.id}3`}>Hospedaje</label>
                  <div class="spoiler">
                    <p className="title">{pack.package?.hotel?.name}</p>
                    <button onClick={()=>{
                      setHotelId(pack.package?.hotel.id)
                      setSelected('hotelreviews')
                    }}>Evaluar</button>
                  </div>
                </div>
                
                <p> Opiniones y Puntajes</p>
                  <Reviews hotel={hotelId} activity={activityId} business={businessId} userlog={userlog} selected={selected} id={data.userId}/>
              </div>
              ))
              )
          : ""}
      
      </div>
    </div>
  );
}