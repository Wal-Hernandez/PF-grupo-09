<<<<<<< HEAD
import React, {useEffect } from 'react'
=======
import React, {useEffect, useMemo } from 'react'
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
import {rootReducer, initialState} from '../../redux/reducer/rootReducer'
import ProductItem from '../ProductItem/ProductItem';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import {TYPES} from '../../redux/actions/shoppingActions';
import { getPackages } from "../../redux/actions/getPackages";
import { getMainPackages } from "../../redux/actions/getMainPackages";
import { getCities } from "../../redux/actions/getCities";
<<<<<<< HEAD
import { getAuth } from "firebase/auth";


export default function ShoppingCart() {
=======
import{removeDetailCart} from "../../redux/actions/removeDetailCart"

import {loadCart} from "../../redux/actions/loadCart"
import { getAuth } from "firebase/auth";


export default function ShoppingCart({userlog}) {
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
    let arrayCartNotLoggedin  = useSelector((state) => state.rootReducer.arrayCartNotLoggedin);
    const { packages, showPackages } = useSelector((state) => state.rootReducer);

    const cart=useSelector((state)=>state.rootReducer.cart)
<<<<<<< HEAD

=======
   
   
      
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
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
    
<<<<<<< HEAD



    const addToCart = (id) =>{
        console.log(id)
        dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }
    const delFromCart = (id, all = false) => {
=======
    


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
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
        console.log(id,all)
        if(all){
            dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
        } else {
            dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
        }
<<<<<<< HEAD
    }
    const clearCart=() => {dispatch({type:TYPES.CLEAR_CART})}
=======
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
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
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

<<<<<<< HEAD

=======
   
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
    if (user) {
        if(localStorage.getItem("myCartLoggedin")){
         //logica para pasar del cart al myCartAll
        

      } 
        
<<<<<<< HEAD
      let detalles=cart&&cart[0]['cartDetails']?.map((cd) => ({ id: cd.packageId, quantity: cd.numberPeople }));
=======
      let detalles=cart&&cart[0]['cartDetails']?.map((cd) => ({ id: cd.packageId, quantity: cd.numberPeople ,idDetail:cd.id}));
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
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
<<<<<<< HEAD

=======
 
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
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5

    return(
        <div>
            <div>

                <h3>Carrito</h3>
                <button onClick={clearCart}>Limpiar carrito</button>
                <hr></hr>
                
                <article>
                    {myCartAll?.map((Cart) => 
<<<<<<< HEAD
                        <ProductItem id={Cart.id} quantity={Cart.quantity} data={packages.filter(elemento => elemento.id===Cart.id)} arrayCartNotLoggedin={arrayCartNotLoggedin}/>
                    )}
                </article>
            </div>
            <div > 
            <hr></hr>
                {/* <Total PackagesInCart={myCartparsed} allpackages={packages} arrayCartNotLoggedin={arrayCartNotLoggedin}/> */}
=======
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
    
>>>>>>> 2b74712e773dc95dd6e1363536dc76f2e7106ee5
            </div> 
        </div> 
    )
}
