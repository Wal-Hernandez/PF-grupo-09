import React from 'react'
import Contacto from '../Contacto';
import Mensaje from '../Mensaje';
import { NavLink } from 'react-router-dom';
import './footer.css'
import { Link } from 'react-router-dom';
import Logo from "../../images/Buspack.png"

function Footer() {
  return (
//     <div className='FooterContainer'>
//       <div className='footerElement'>
//         <Link to="/about">Acerca de nosotros</Link>
//       </div>
//       <form>
//       <div className='footerElement'>
//         <Mensaje/>
//       </div>
//       </form>
//       <div className='footerElement'>
//         <Contacto/>
//       </div>
//       <div>
// <NavLink to ="/faq"> Preguntas Frecuentes</NavLink>

//       </div>
//     </div>
<div class="footer__container">
	<div class="footer-img__container">
        <img src={Logo} alt="Buspack"/>
        <div class="copyright">
            <small> &copy;2022 <b>Buspack</b> - Todos los Derechos Reservados </small>
        </div>
    </div>
    <div class="redes">
        <h2>SEGUINOS</h2>
        <div class="red-social">
            <a href="https://www.facebook.com/andestouroperadorturistico/" target="_blank" class="fa fa-facebook"></a>
            <a href="https://www.instagram.com/puntoviajes/?hl=es" target="_blank" class="fa fa-instagram"></a>
            <a href="https://wa.me/542613660793" target="_blank" class="fa fa-whatsapp"></a>
            <a href="mailto:info@puntoviajes.com.ar" target="_blank" class="fa fa-envelope"></a>
    
        </div>
        <div>
            <Link to ="/faq" class="preguntas"> Preguntas Frecuentes</Link>
        </div>

    </div>
    
    <div class="contactos">
        <div class="sucursales">
            <h2>SUCURSALES</h2>
            <ul>
                <li><a href="https://www.google.com.ar/maps/place/Punto+Viajes/@-32.8850739,-68.8458434,17z/data=!4m9!1m2!2m1!1spunto+viajes!3m5!1s0x967e0902d30dfb53:0x346ceda31148747e!8m2!3d-32.8849401!4d-68.8444193!15sCgxwdW50byB2aWFqZXOSAQ10cmF2ZWxfYWdlbmN5" target="_blank">Av. Las Heras 499, Ciudad de Mendoza</a></li>
                <li><a href="https://www.google.com.ar/maps/place/9+de+Julio+1042,+M5500+Mendoza/@-32.8909048,-68.8410228,20.25z/data=!4m5!3m4!1s0x967e091a1f2ef5e1:0xca8cb73ffc9856bc!8m2!3d-32.8910041!4d-68.8410288" target="_blank">9 de Julio 1042, Ciudad de Mendoza</a></li>
            </ul>
        </div>
        <div class="telefonos">
            <h2>TELEFONOS</h2>
            <ul>
                <li><i class="fas fa-phone"></i> (0261) 4259666</li>
                <li><i class="fas fa-phone"></i> (0261) 6110028</li>
            </ul>
        </div>
    </div>
</div>
  )
}


export default Footer