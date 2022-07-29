import React, {useReducer } from 'react'
import styles from './CartItem.module.css'


export default function CartItem({data, delFromCart}) {
    let {id,name,price, quantity} = data
    return(
        <div className={styles.cartItemContainer} >
            <p>{name}</p>
            <p>${price}.00 x {quantity} = ${price * quantity}.00</p>
            <button>Eliminar</button>
            <button onClick={() => delFromCart(id)}>Eliminar uno</button>
            <br></br> {/* cuando se hagan los estilos se debería quitar */}
            <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
        </div> 
    )
}