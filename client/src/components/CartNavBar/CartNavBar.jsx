import React, {useReducer } from 'react'
import { useSelector } from 'react-redux';

export default function CartNavBar({data}) {
    let ProductsInCart
    if(localStorage.getItem("myCart")){
        let myCarttext=localStorage.getItem("myCart")
        let myCartparsed=JSON.parse(myCarttext)
        ProductsInCart=0
        myCartparsed.map((el) => {
            ProductsInCart=ProductsInCart+el.price*el.quantity
        })
    }

    return(
        <div>
            <p>Total:</p>

        </div> 
    )
}