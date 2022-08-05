import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPackageId } from "../../redux/actions/getPackageId";
import { getClean } from "../../redux/actions/getClean";
import "./details.css";
import {TYPES} from '../../redux/actions/shoppingActions';
import { getAuth } from "firebase/auth";
import CartItem from "../CartItem/CartItem"
import Reviews from "../Reviews";
import{addDetailCart} from "../../redux/actions/addDetailCart"
import {loadCart} from "../../redux/actions/loadCart"

export default function Details({userlog}) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const packageDetail = useSelector((state) => state.rootReducer.detail);
  const cart = useSelector((state) => state.rootReducer.cart);
  const packageActivity = [];
  packageDetail.activities?.map((e) => {
    packageActivity.push(
      <div>{e.name}</div>
    )
  })

  useEffect(() => {
    dispatch(getPackageId(id));
    dispatch(getClean());
  }, [dispatch, id]);

  console.log(packageDetail);

  let arrayCartNotLoggedin  = useSelector((state) => state.rootReducer.arrayCartNotLoggedin);
  let arrayCartLoggedin  = useSelector((state) => state.rootReducer.arrayCartLoggedin);
  console.log(arrayCartLoggedin)
  const products = useSelector ((state) => state.products)

  const auth = getAuth();
  const user = auth.currentUser;

  const addToCart = (id) =>{
    if(user){
      let idCart=cart[0]['id'];
      console.log("IDCART:",idCart,id)
      let email=cart[0]['user']['mail'];
      dispatch(addDetailCart(idCart,id))
      dispatch(loadCart(email))
    }
    else{ console.log(id)
      dispatch({type:TYPES.ADD_TO_CART, payload:id})
    }
     
  }
  const delFromCart = (id, all = false) => {
    console.log("del from cartttt")
      console.log(id,all)
      if(all){
          dispatch({type:TYPES.REMOVE_ALL_FROM_CART, payload:id})
      } else {
          dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
      }
  }
  const clearCart=() => {dispatch({type:TYPES.CLEAR_CART})}
   let myCarttextNotLoggedin
  let myCartparsedNotLoggedin=[]
  let myCartparsedfilteredNotLoggedin={}
  let myCarttextLoggedin
  let myCartparsedLoggedin=[]
  let myCartparsedfilteredLoggedin={}
  let myCartAll
  if(localStorage.getItem("myCartNotLoggedin")){
      myCarttextNotLoggedin = localStorage.getItem("myCartNotLoggedin")
      myCartparsedNotLoggedin= JSON.parse(myCarttextNotLoggedin)
      console.log(myCartparsedNotLoggedin)
      myCartparsedfilteredNotLoggedin =myCartparsedNotLoggedin.filter((p) => p.id == id)
      myCartparsedfilteredNotLoggedin=myCartparsedfilteredNotLoggedin[0]
  } 

  
  if (user) {
    if(localStorage.getItem("myCartLoggedin")){
      myCarttextLoggedin = localStorage.getItem("myCartLoggedin")
      myCartparsedLoggedin= JSON.parse(myCarttextLoggedin)
      console.log(myCartparsedLoggedin)
      myCartparsedfilteredLoggedin =myCartparsedLoggedin.filter((p) => p.id == id)
      myCartparsedfilteredLoggedin=myCartparsedfilteredLoggedin[0]
      myCartAll=myCartparsedfilteredLoggedin
  } 
    // ...
  } else {
    // No user is signed in.
    console.log("No logueado")
    myCartAll=myCartparsedfilteredNotLoggedin
  }



  return (
    <div class="card">
      <div>
        <div>
          <img
            class="card-img-top"
            src={packageDetail.hotel?.urlImage}
            alt="Image not found"
            width="300px"
            height="300px"
          />
        </div>
        <h5 class="card-title">Nombre: {packageDetail.name}</h5>
      </div>
      <div>
        <p class="card-text">Fecha salida: {packageDetail.start_date}</p>
        <p class="card-text">Fecha llegada: {packageDetail.end_date}</p>
        <p class="card-text">Resumen de lo que incluye: </p>
      </div>
      <div>
        <p class="card-text">
          Coordenadas: {packageDetail.hotel?.location[0]} -{" "}
          {packageDetail.hotel?.location[1]}
        </p>
        <p class="card-text">Hotel: {packageDetail.hotel?.name}</p>
        <p class="card-text">Actividad: {packageActivity}</p>
        <p class="card-text">Precio: ${packageDetail.price}</p>
      </div>
      <button onClick={() => addToCart(id)}>Agregar una persona al carrito al carrito</button> 
      {     (myCartAll && (localStorage.getItem("myCartNotLoggedin") || localStorage.getItem("myCartLoggedin")))?(
                <article>    
                    <CartItem id={packageDetail.id} quantity={myCartAll.quantity} price={packageDetail.price} delFromCart={delFromCart} arrayCartNotLoggedin={arrayCartNotLoggedin} arrayCartLoggedin={arrayCartLoggedin}/>           
                </article>) : null 
      }

      <div>
        {packageDetail.hotel ? <Reviews hotel={packageDetail.hotel}/> : null}
      </div>
    </div>

  );
}