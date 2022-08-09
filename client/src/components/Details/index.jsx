import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPackageId } from "../../redux/actions/getPackageId";
import { getClean } from "../../redux/actions/getClean";
import "./details.css";
import {TYPES} from '../../redux/actions/shoppingActions';
import { getAuth } from "firebase/auth";
import CartItem from "../CartItem/CartItem"
import Reviews from "../Reviews";
import{addDetailCart} from "../../redux/actions/addDetailCart"
import {loadCart} from "../../redux/actions/loadCart"
import {addOnePeople} from "../../redux/actions/addOnePeople"
import { getPackages } from "../../redux/actions/getPackages";
import StarRating from "../StarRatings/index"



export default function Details({userlog}) {
  const dispatch = useDispatch();
  const { packages, showPackages } = useSelector((state) => state.rootReducer);
  const { id } = useParams();
  const packageDetail = useSelector((state) => state.rootReducer.detail);
  const cart = useSelector((state) => state.rootReducer.cart);
  const packageActivity = [];
  packageDetail.activities?.map((e) => {
    packageActivity.push(
      <div>{e.name}</div>
    )
  })
  
    

  const auth = getAuth();
  const user = auth.currentUser;
  
   console.log(packageDetail)
   useEffect(()=>{
     dispatch(getPackages())
     if(user?.email!==undefined){
         dispatch(loadCart(user?.email)) 
    }
   },[user,dispatch])
  
  useEffect(() => {
    dispatch(getPackageId(id));
    //dispatch(getClean());
    if(user?.email)
    dispatch(loadCart(user?.email))
  }, [dispatch, id,user]);



  useEffect(() => {
     return()=>{
      dispatch(getClean())
    }
  }, [dispatch]);


  let arrayCartNotLoggedin  = useSelector((state) => state.rootReducer.arrayCartNotLoggedin);
  let arrayCartLoggedin  = useSelector((state) => state.rootReducer.arrayCartLoggedin);
  console.log(arrayCartLoggedin)
  const products = useSelector ((state) => state.products)

 

  const addToCart = (id) =>{
    if(user){
      console.log("ID:",id)
      let detalles=cart[0]['cartDetails'];
      detalles.forEach(element => {
        console.log("foreach",element.packageId)
      });
      let detailpackageId=detalles.filter(d=>d.packageId==id)
      console.log("detalle:",detalles)
      console.log("detailpackageId:",detailpackageId)

      if(detailpackageId.length===1){
         //Logica para aumentar una persona al detalle del paquete
          let idCartDetail=detailpackageId[0].id;
          console.log("idCartDetail",idCartDetail)
          let numberPeople=detailpackageId[0].numberPeople;
          console.log("numberPeople",numberPeople)
          dispatch(addOnePeople(idCartDetail,numberPeople,user.email))
      }
      else{
        //logica para agregar un nuevo detalle
        let idCart=cart[0]['id'];
      console.log("IDCART:",idCart,id)
      let email=cart[0]['user']['mail'];
      dispatch(addDetailCart(idCart,id,email))
      }
      
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

  



let paqueteCargado=false;
 if(cart[0]){
  if(cart[0].cartDetails.length>0){
    let res=cart[0].cartDetails.filter(d=>d.packageId==packageDetail.id)
    console.log("PAQUETECARGADO",res)
    if(res.length>0)
    {paqueteCargado=true}
  }
 }
 if(localStorage.getItem("myCartNotLoggedin")){
  myCarttextNotLoggedin = localStorage.getItem("myCartNotLoggedin")
  myCartparsedNotLoggedin= JSON.parse(myCarttextNotLoggedin)
  if(id) {
    console.log(myCartparsedNotLoggedin)
    let myCartparsedNotLoggedinfiltered=myCartparsedNotLoggedin.filter(e=>e.id==id)
    if(myCartparsedNotLoggedinfiltered.length>0) {
      paqueteCargado=true
    }
  }
 }



console.log("CART:",cart)
console.log(new Date(packageDetail.start_date).toString())

  return (
    <div class="container "> 

<div class="card mb-3">
  <div class="row g-0 ">
    <div class="col-md-4 ">
      <img src={packageDetail.hotel?.urlImage} class="img-fluid rounded-start"  alt="Image not found"/>
    </div>
    <div class="col-md-5">
      <div class="card-body info-det">
        <h5 class="card-title title-det">{packageDetail.name}</h5>
        <h6 class="card-title city-det">{packageDetail.city?.name} </h6>
        <h6 class="card-title hotel-det">{packageDetail.hotel?.name}</h6>
        <h5 className="card-title star"><StarRating stars = {packageDetail.hotel?.stars}/></h5> 
        <h5>{packageDetail.hotel?.wifi? <span class="material-symbols-outlined">
              wifi
              </span>:null} {packageDetail.hotel?.pool?<span class="material-symbols-outlined">
              pool
              </span>:null}{packageDetail.hotel?.gym?<span class="material-symbols-outlined">
              fitness_center
              </span>:null}
        </h5>
        <div className="activites-det">
        <a class="card-title" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
          Actividades incluidas 
          <span class="material-symbols-outlined">
          expand_more
          </span>
        </a>
          <div class="col">
            <div class="collapse" id="multiCollapseExample1">
              <div class="card card-body">
              <p class="card-text act">{packageActivity?packageActivity:null}</p>
              </div>
            </div>
          </div>
        {/* <h6 class="card-title">Actividades incluidas</h6>
        <p class="card-text act">{packageActivity}</p> */}
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card-body">
        <h4 class="card-title">Precio por persona</h4>
        <h3 class="card-text price-det">$ {packageDetail.price}</h3>
        <p class="card-text fecha">Salida: {new Date(packageDetail.start_date).toLocaleString('es-ES')}</p>
        <p class="card-text fecha">Llegada: {new Date(packageDetail.end_date).toLocaleString('es-ES')}</p>
        <p class="card-text stock"> <small class="text-muted">Stock disponible {packageDetail.stock}</small></p>
        
      </div> 
      <div className="btn-comprar">
      {paqueteCargado?<Link to="/shoppingcart">
      <button className="btn btn-warning">Ver en el Carrito<span class="material-symbols-outlined">
shopping_cart_checkout
</span></button></Link>:
      <button className="btn btn-warning" onClick={() => addToCart(id)}>
        Agregar al carrito 
        <span class="material-symbols-outlined">
        add_shopping_cart
        </span>
      </button>} 
      </div>
    </div>
    <div>
    
    </div>
  </div>
</div>

</div>
);

}