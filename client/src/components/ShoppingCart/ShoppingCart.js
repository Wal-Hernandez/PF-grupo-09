import React, {useEffect, useMemo } from 'react'
import {rootReducer, initialState} from '../../redux/reducer/rootReducer'
import ProductItem from '../ProductItem/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import {TYPES} from '../../redux/actions/shoppingActions';
import { getPackages } from "../../redux/actions/getPackages";
import { getMainPackages } from "../../redux/actions/getMainPackages";
import { getCities } from "../../redux/actions/getCities";
import{removeDetailCart} from "../../redux/actions/removeDetailCart"

import {loadCart} from "../../redux/actions/loadCart"
import { getAuth } from "firebase/auth";


export default function ShoppingCart({userlog}) {
    let arrayCartNotLoggedin  = useSelector((state) => state.rootReducer.arrayCartNotLoggedin);
    const { packages, showPackages } = useSelector((state) => state.rootReducer);

    const cart=useSelector((state)=>state.rootReducer.cart)
   
   
      
    const dispatch = useDispatch();
    console.log(packages)
    const auth = getAuth();
    const user = auth.currentUser;


    useEffect(() => {
        dispatch(getCities());
        !packages.length
          ? dispatch(getPackages())
          : !showPackages.length
          ? dispatch(getMainPackages())
          : console.log("hecho");
      }, [dispatch, packages, showPackages]);
    
    


    const addToCart = (id) =>{
        if(user){
           
          }
          else{ console.log(id)
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }
       
    }
    const delFromCart = (id, all = false) => {
        if(user){
        
          dispatch(removeDetailCart(id))
         
          dispatch(loadCart(userlog.email))
        }
        else{
        console.log(id,all)
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        } else {
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
      }
    }
    const clearCart=() => {
        if (user){
     for (let i = 0; i < cart[0]['cartDetails'].length; i++) { 
        dispatch(removeDetailCart(cart[0]['cartDetails'][i]['id']))
     }
         //una vez borrado todo los detalles recargar el carrito
          dispatch(loadCart(userlog.email))
        }
        else{
         dispatch({type:TYPES.CLEAR_CART})
        }
       
    }
    let myCarttext
    let myCartparsed=[]
    let myCartparsedfiltered={}
    let myCarttextNotLoggedin
    let myCartparsedNotLoggedin=[]
    let myCartparsedfilteredNotLoggedin={}
    let myCarttextLoggedin
    let myCartparsedLoggedin=[]
    let myCartparsedfilteredLoggedin={}
    let myCartAll=[]

   
    if (user) {
        if(localStorage.getItem("myCartLoggedin")){
         //logica para pasar del cart al myCartAll
        

      } 
        
      let detalles=cart&&cart[0]['cartDetails']?.map((cd) => ({ id: cd.packageId, quantity: cd.numberPeople ,idDetail:cd.id}));
          myCartAll=detalles;
         console.log("TU PAPA:",myCartAll)
     
      // ...
      } else {
        // No user is signed in.
        if(localStorage.getItem("myCartNotLoggedin")){
            myCarttextNotLoggedin = localStorage.getItem("myCartNotLoggedin")
            myCartAll= JSON.parse(myCarttextNotLoggedin)
        }
      }
 
//s
//  let priceTotal=()=>{
//     let total=0
//     for (let i=0; i< myCartAll.length; i++) {
//        for (let j=0; j< myCartAll.length; j++) {
//            if( myCartAll[i].id===packages[j].id) {
//                total=total+packages[j].price* myCartAll[i].quantity
//            }
//        }
//    }
//    return total;
// } 

let precioTotal= myCartAll?.map(c=>{return {id:c.id, quantity:c.quantity,data:packages.filter(elemento => elemento.id===c.id)[0]["price"] }})


let total = precioTotal
    .map((item) => item.data)
    .reduce((prev, curr) => prev + curr, 0);
  console.log(total);

    return(
        <div>
            <div>

                <h3>Carrito</h3>
                <button onClick={clearCart}>Limpiar carrito</button>
                <hr></hr>
                
                <article>
                    {myCartAll?.map((Cart) => 
                     <ProductItem idDetail={Cart.idDetail} id={Cart.id} quantity={Cart.quantity} data={packages.filter(elemento => elemento.id===Cart.id)} arrayCartNotLoggedin={arrayCartNotLoggedin} delFromCart={delFromCart}/>   
                    )}
                    
                </article>
                <div>{
                    
                    }
                
                </div>
            </div>
            <div > 
            <hr></hr>
            <div>
            <h1>Total: ${total}.00</h1>
            </div>
    
            </div> 
        </div> 
    )
}