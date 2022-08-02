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
                <img src={Logo} alt="Buspack" />
                <div class="copyright">
                    <small> &copy;2022 <b>Buspack</b> - Todos los Derechos Reservados </small>
                </div>
            </div>
            <div class="redes">
                <h2>SEGUINOS</h2>
                <div class="red-social">
                    <a target="_blank" class="fa fa-facebook"></a>
                    <a target="_blank" class="fa fa-instagram"></a>
                    <a target="_blank" class="fa fa-whatsapp"></a>
                    <a target="_blank" class="fa fa-envelope"></a>

                </div>
                <div>
            <Link to ="/faq" class="preguntas"> Preguntas Frecuentes</Link>
        </div>
            </div>

            <div class="contactos">
                <div class="sucursales">
                    <h2>SUCURSALES</h2>
                    <ul>
                        <li><a href="#" target="_blank">Av. Las Heras 499, Ciudad de Mendoza</a></li>
                        <li><a href="#" target="_blank">9 de Julio 1042, Ciudad de Mendoza</a></li>
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