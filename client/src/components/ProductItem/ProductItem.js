import React from "react"

export default function ProductItem({data, addToCart}) {
    let {id, name, price} = data;
    return(
        <div>
            <hr></hr> {/*  cuando se hagan capaz haya que quitar esta linea */}
            <p>{name}</p>
            <p>${price}.00</p>
            <button onClick={() => addToCart(id)}>Agregar</button>
        </div> 
    )
}