import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { loadShopping } from '../../redux/actions/loadShopping';
import './Profile.css'
import Reviews from '../Reviews';
export default function ProfileUser({ userlog }) {
  const dispatch = useDispatch()
  const { shopping } = useSelector(state => state.rootReducer)
  React.useEffect(
    () => { dispatch(loadShopping(userlog?.email)) }, [dispatch]
  )
  console.log(shopping)
  const [selected, setSelected] = useState('');
  const [activityId, setActivityId] = useState('');
  const [businessId, setBusinessId] = useState('');
  const [hotelId, setHotelId] = useState('');
  console.log(activityId)
  console.log(businessId)

  ///Algoritmo para las Reviews
let cartDetails= shopping && shopping?.map(a=>a.cartDetails);

let paquetes = cartDetails?.flat(Infinity).map(a=>a.package);
let puntuables= paquetes?.map(a=>{return{ra: a.activities, rb:a.business, rh:a.hotel} })
console.log(puntuables)
return (
    <div>
      <Navbar userlog={userlog} />
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      /> */}
      <div>
        {/* <img src="img.jpg" alt="John" style={{ width: "100%" }} /> */}
        <h1 className="title">{userlog?.nombre + " " + userlog?.apellido}</h1>
        <p>Historial de Compras</p>
{/* <<<<<<< HEAD
        {shopping.length ? shopping.map((data,i) => <div className='user-card'>
          <p className='title'>{data?.cartDetails[0].package?.name}</p>
          <input type="checkbox" id={`spoiler2${i}`} />
          <label for={`spoiler2${i}`}  >Actividades</label>
          <div class="spoiler">{data?.cartDetails[0].package?.activities?.map(a => <p className='title'>{a?.name}</p>)}
          </div>
          <input type="checkbox" id={`spoiler${i}`}  />
          <label for={`spoiler${i}`}  >Empresa</label>
          <div class="spoiler">   <p className='title'>{data?.cartDetails[0].package?.business?.name}</p>
          </div>
          <input type="checkbox" id={`spoiler3${i}`} />
          <label for={`spoiler3${i}`}  >Hospedaje</label>

          <div class="spoiler">  <p className='title'>{data?.cartDetails[0].package?.hotel?.name}</p>
          </div>
        </div>)
          : ''}
======= */}
        {shopping.length
          ? shopping.map((data) =>
              data?.cartDetails.map((pack) => (
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
                
              ))
            )
          : ""}
       
          <Reviews hotel={hotelId} activity={activityId} business={businessId} userlog={userlog} selected={selected}/>
        {/* <p>
          <button className="coment-btn">Comentario</button>
        </p> <p> Opiniones y Puntajes</p> */}
      </div>
    </div>
  );
}