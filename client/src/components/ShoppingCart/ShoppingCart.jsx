import React, {useReducer } from 'react'
import {rootReducer, initialState} from '../../redux/reducer'
import ProductItem from '../ProductItem/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import {TYPES} from '../../redux/actions/shoppingActions';
import styles from './ShoppingCart.module.css'


export default function ShoppingCart() {
    const products = useSelector ((state) => state.products)
    const cart = useSelector ((state) => state.cart)

    const dispatch = useDispatch();


    const addToCart = (id) =>{
        dispatch({type:TYPES.ADD_TO_CART, payload:id})    
    }

    const delFromCart = (id, all = false) => {
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        } else {
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
    }
    const clearCart=() => {dispatch({type:TYPES.CLEAR_CART})}
    let myCarttext=localStorage.getItem("myCart")
    let myCartparsed=JSON.parse(myCarttext)
    console.log(myCartparsed)

    return(
        <div className={styles.soppingCartContainer}>
            <div className={styles.CartsContainer}>
                <h2>Carrito de Compras</h2>
                <h3>Productos</h3>
                <article>
                    {products.map((product) => <ProductItem key={product.id} 
                    data={product} addToCart = {addToCart} />)}
                </article>
                <h3>Carrito</h3>

                <button onClick={clearCart}>Limpiar Carrito</button>
            </div>
            <div className={styles.CartItemStyle}> 
                <article>    
                        {
                            myCartparsed.map((item,index) => <CartItem key={index.id} data={item} delFromCart={delFromCart}/>)
                        }
                </article> 
            </div> 
        </div> 
    )
}
