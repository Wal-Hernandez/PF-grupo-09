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
  

  
  useEffect(() => {
    dispatch(getPackageId(id));
    //dispatch(getClean());
    if(user?.email)
    dispatch(loadCart(user?.email))
  }, [dispatch, id,user]);


  useEffect(()=>{
    if(!packages.length) dispatch(getPackages())
    if(user?.email!==undefined){
        dispatch(loadCart(user?.email)) 
   }
  },[user,dispatch])

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
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{packageDetail.name}</h5>
        <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
        <p class="card-text"><small class="text-muted">Última actualización hace 3 minutos</small></p>
      </div>
    </div>
    <div>
    <button onClick={() => addToCart(id)}>Agregar una persona al carrito al carrito</button> 
      {     (myCartAll && (localStorage.getItem("myCartNotLoggedin") || localStorage.getItem("myCartLoggedin")))?(
                <article>    
                    <CartItem id={packageDetail.id} quantity={myCartAll.quantity} price={packageDetail.price} delFromCart={delFromCart} arrayCartNotLoggedin={arrayCartNotLoggedin} arrayCartLoggedin={arrayCartLoggedin}/>           
                </article>) : null 
      }
    </div>
  </div>
</div>

    {/* <div class="card">
      
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
        <h6> Ciudad: {packageDetail.city?.name} </h6>
      </div>
      <div>
        <p class="card-text">Fecha salida: {new Date(packageDetail.start_date).toLocaleString('es-ES')}</p>
        <p class="card-text">Fecha llegada: {new Date(packageDetail.end_date).toLocaleString('es-ES')}</p>
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
        <p class="card-text">Stock: {packageDetail.stock}</p>
      </div>
      {paqueteCargado?<Link to="/shoppingcart"><button className="btn btn-warning">Ver en el Carrito</button></Link>:<button className="btn btn-warning" onClick={() => addToCart(id)}>Agregar una persona al carrito al carrito</button>} 

      <div>
        {packageDetail.hotel ? <Reviews hotel={packageDetail.hotel}/> : null}
      </div>
    </div> */}
    </div>

  );
}