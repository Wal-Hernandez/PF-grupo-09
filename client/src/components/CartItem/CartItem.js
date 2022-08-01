import React, {useReducer } from 'react'
import { useDispatch, useSelector } from "react-redux";




export default function CartItem({id, quantity, price, delFromCart, arrayCartNotLoggedin, arrayCartLoggedin, clearCart }) {

    return(
        <div>
            <p>${price}.00 x {quantity} = ${price * quantity}.00</p>
            <button onClick={() => delFromCart(id)}>Quitar una persona del paquete</button>
            <br></br>                                   {/* cuando se hagan los estilos se debería quitar */}
            <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
        </div> 
    )
}