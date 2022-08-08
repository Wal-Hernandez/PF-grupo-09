import React from 'react';
import Navbar from '../Navbar';
import { useDispatch,useSelector } from 'react-redux';
export default function ProfileUser ({userlog}){
console.log(userlog)

return(
<div>
    <Navbar userlog={userlog}/>
{/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      /> */}
      <div >
        {/* <img src="img.jpg" alt="John" style={{ width: "100%" }} /> */}
        <h1 className='title'>{userlog?.nombre +" "+ userlog?.apellido}</h1>
        <p>Historial de Compras</p>   
        <p> Opiniones y Puntajes</p>
        
        
        <p>
          <button>Comentario</button>
        </p>
     </div>



</div>
)
}