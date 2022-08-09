import React from 'react';
import Navbar from '../Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { loadShopping } from '../../redux/actions/loadShopping';
import './Profile.css'
export default function ProfileUser({ userlog }) {
  const dispatch = useDispatch()
  const { shopping } = useSelector(state => state.rootReducer)
  React.useEffect(
    () => { dispatch(loadShopping(userlog?.email)) }, [dispatch]
  )
  console.log(shopping)
  return (
    <div>
      <Navbar userlog={userlog} />
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      /> */}
      <div >
        {/* <img src="img.jpg" alt="John" style={{ width: "100%" }} /> */}
        <h1 className='title'>{userlog?.nombre + " " + userlog?.apellido}</h1>
        <p>Historial de Compras</p>
        {shopping.length ? shopping.map(data => <div className='user-card'>
          <p className='title'>{data?.cartDetails[0].package?.name}</p>
          <input type="checkbox" id="spoiler2" />
          <label for="spoiler2" >Actividades</label>
          <div class="spoiler">{data?.cartDetails[0].package?.activities?.map(a => <p className='title'>{a?.name}</p>)}
          </div>
          <input type="checkbox" id="spoiler" />
          <label for="spoiler" >Empresa</label>
          <div class="spoiler">   <p className='title'>{data?.cartDetails[0].package?.business?.name}</p>
          </div>
          <input type="checkbox" id="spoiler3" />
          <label for="spoiler3" >Hospedaje</label>

          <div class="spoiler">  <p className='title'>{data?.cartDetails[0].package?.hotel?.name}</p>
          </div>
        </div>)
          : ''}
        <p> Opiniones y Puntajes</p>


        <p>
          <button className='coment-btn'>Comentario</button>
        </p>
      </div>



    </div>
  )
}