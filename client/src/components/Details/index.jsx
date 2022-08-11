import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPackageId } from "../../redux/actions/getPackageId";
import { getClean } from "../../redux/actions/getClean";
import "./details.css";
import {TYPES} from '../../redux/actions/shoppingActions';
import { getAuth } from "firebase/auth";
import CartItem from "../CartItem/CartItem"
import{addDetailCart} from "../../redux/actions/addDetailCart"
import {loadCart} from "../../redux/actions/loadCart"
import {addOnePeople} from "../../redux/actions/addOnePeople"
import { getPackages } from "../../redux/actions/getPackages";
import StarRating from "../StarRatings/index"
import ShowReviews from "../Reviews/ShowReviews";
import MapView from "../Map/MapView.js";
import {getUserReviews} from '../../redux/actions/getUserReviews'


export default function Details({userlog}) {
  const dispatch = useDispatch();
  const { packages, showPackages } = useSelector((state) => state.rootReducer);
  const { id } = useParams();
  
  const users = useSelector((state) => state.rootReducer.users);

  const packageDetail = useSelector((state) => state.rootReducer.detail);
  const cart = useSelector((state) => state.rootReducer.cart);
  const packageActivity = [];
  packageDetail.activities?.map((e) => {
    packageActivity.push(
      <div>{e.name}</div>
    )
  })
  const [showReviews, setshowReviews] = useState(false);
    

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

  

  console.log(packageDetail.city?.image)

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
 let imagen1
 let imagen2
 let imagen3
 let name1
 let name2
 let name3
let imagen=packageDetail.activities
if(imagen){
 imagen1=imagen[0].image.slice(1, -1)
  imagen2=imagen[1].image.slice(1, -1)
  imagen3=imagen[2].image.slice(1, -1)
  name1=packageDetail.activities[0].name
  name2=packageDetail.activities[1].name
  name3=packageDetail.activities[2].name


}


console.log("CART:",cart)
console.log(new Date(packageDetail.start_date).toString())


  return (
    <div class="container ">
      <div class="card mb-3 card-detalles-details">
        <div class="row g-0 ">
          <div class="col-md-4 ">
            <img
              src={packageDetail.city?.image}
              class="img-fluid rounded-start"
              alt="Image not found"
            />
          </div>
          <div class="col-md-5">
            <div class="card-body info-det">
              <h5 class="card-title title-det">{packageDetail.name}</h5>
              <h6 class="card-title city-det">{packageDetail.city?.name} </h6>
              <h6 class="card-title hotel-det">{packageDetail.hotel?.name}</h6>
              <h5 className="card-title star">
                <StarRating stars={packageDetail.hotel?.stars} />
              </h5>
              <h5>
                {packageDetail.hotel?.wifi ? (
                  <span class="material-symbols-outlined">wifi</span>
                ) : null}{" "}
                {packageDetail.hotel?.pool ? (
                  <span class="material-symbols-outlined">pool</span>
                ) : null}
                {packageDetail.hotel?.gym ? (
                  <span class="material-symbols-outlined">fitness_center</span>
                ) : null}
              </h5>
              <div className="activites-det">
                <a
                  class="card-title"
                  data-bs-toggle="collapse"
                  href="#multiCollapseExample1"
                  role="button"
                  aria-expanded="false"
                  aria-controls="multiCollapseExample1"
                >
                  Actividades incluidas
                  <span class="material-symbols-outlined">expand_more</span>
                </a>
                <div class="col">
                  <div class="collapse" id="multiCollapseExample1">
                    <div class="card card-body">
                      <p class="card-text act">
                        {packageActivity ? packageActivity : null}
                      </p>
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
              <p class="card-text fecha">
                Salida:{" "}
                {new Date(packageDetail.start_date).toLocaleString("es-ES")}
              </p>
              <p class="card-text fecha">
                Llegada:{" "}
                {new Date(packageDetail.end_date).toLocaleString("es-ES")}
              </p>
              <p class="card-text stock">
                {" "}
                <small class="text-muted">
                  Stock disponible {packageDetail.stock}
                </small>
              </p>
            </div>
            <div className="btn-comprar">
              {paqueteCargado ? (
                <Link to="/shoppingcart">
                  <button className="btn btn-warning">
                    Ver en el Carrito
                    <span class="material-symbols-outlined">
                      shopping_cart_checkout
                    </span>
                  </button>
                </Link>
              ) : (
                <button
                  className="btn btn-warning"
                  onClick={() => addToCart(id)}
                >
                  Agregar al carrito
                  <span class="material-symbols-outlined">
                    add_shopping_cart
                  </span>
                </button>
              )}
            </div>
          </div>
          <div></div>
        </div>
      </div>

      <div className="detalles-div detalles-completos">
                  <div className="ubicacion-google">
                    <h5 className="tittulo-detalles">Ubicacion del Hotel 
                      <span class="material-symbols-outlined">
                      pin_drop
                      </span>
                    </h5>
                    <MapView packageDetail = {packageDetail}/>
        <div class=" card-hotel-detalles">
          <div class="mr-1">
            <img
              class="rounded"
              src={packageDetail.hotel?.urlImage[0]}
              width="100"
              height="80"
            />
          </div>

          

            <div class="d-flex flex-column align-items-center product-details info-cart">
              <h5 class="font-weight-bold">{packageDetail.hotel?.name}</h5>
              <div class="d-flex flex-column align-items-start product-desc">
                <div class="sizese mr-1">

                </div>

                <div class="colores">
                  <span class="text-grey b "> </span>{" "}
                  <span class="font-weight-bold b">

                  </span>
                </div>
              </div>
            </div>
          <div class="d-flex flex-row align-items-center qty">           
          </div>
            <div>             
            </div>
          <div class="d-flex align-items-center">
          </div>
        </div>
            
                  </div>
     
      <div className="actividades" >
        <div>
        <h5>Actividades Incluidas</h5>
        </div>
      <div className="actividades-incluidas">
      <div class="act">
          <div class="mr-1">
            <img
              class="rounded"
              src={imagen1}
              width="200"
              height="150"
            />
          </div>

            <div class="">
              <h6 class="font-weight-bold">{name1}</h6>
              <div class="d-flex flex-column align-items-start product-desc">
                <div class="sizese mr-1">

                </div>

                <div class="colores">
                  <span class="text-grey b "> </span>{" "}
                  <span class="font-weight-bold b">

                  </span>
                </div>
              </div>
            </div>
          <div class="d-flex flex-row align-items-center qty">           
          </div>
            <div>             
            </div>
          <div class="d-flex align-items-center">
          </div>
        </div>
        <div class="act">
          <div class="mr-1">
            <img
              class="rounded"
              src={imagen2}
              width="200"
              height="150"
            />
          </div>

            <div class="">
              <h6 class="font-weight-bold">{name2}</h6>
              <div class="d-flex flex-column align-items-start product-desc">
                <div class="sizese mr-1">

                </div>

                <div class="colores">
                  <span class="text-grey b "> </span>{" "}
                  <span class="font-weight-bold b">

                  </span>
                </div>
              </div>
            </div>
          <div class="d-flex flex-row align-items-center qty">           
          </div>
            <div>             
            </div>
          <div class="d-flex align-items-center">
          </div>
        </div>
        <div class="act">
          <div class="mr-1">
            <img
              class="rounded"
              src={imagen3}
              width="200"
              height="150"
            />
          </div>

            <div class="">
              <h6 class="font-weight-bold">{name3}</h6>
              <div class="d-flex flex-column align-items-start product-desc">
                <div class="sizese mr-1">

                </div>

                <div class="colores">
                  <span class="text-grey b "> </span>{" "}
                  <span class="font-weight-bold b">

                  </span>
                </div>
              </div>
            </div>
          <div class="d-flex flex-row align-items-center qty">           
          </div>
            <div>             
            </div>
          <div class="d-flex align-items-center">
          </div>
        </div>
        </div>
        </div>
    </div>
    <div className="detalles-div">
      {!packageDetail.hotel?.reviewHotels?.length &&
      !packageDetail.business?.reviewBusinesses?.length &&
      !packageDetail.activities?.map(e=>e.reviewActivities).flat().length ? (
        <p>Aún no hay valoraciones para los elementos de este paquete</p>
      ) : (
        <div className="review-container">
          <button  class="btn-detalles-pag" onClick={() => setshowReviews(!showReviews)}>
            Mostrar valoraciones de usuarios
          <span class="material-symbols-outlined">
            expand_more
            </span>
          </button>
          {packageDetail.hotel?.reviewHotels?.length ? (
            <div>
              {showReviews && (
                <ShowReviews data={packageDetail.hotel?.reviewHotels} titulo={`Hotel - ${packageDetail.hotel?.name}`} />
              )}
            </div>
          ) : null}
          {packageDetail.business?.reviewBusinesses?.length ? (
            <div>
              {showReviews && (
                <ShowReviews data={packageDetail.business?.reviewBusinesses} titulo={`Transporte - ${packageDetail.business?.name}`}/>
              )}
            </div>
          ) : null}
          {packageDetail.activities?.map(act=> act?.reviewActivities.length ? (
            <div>
              {showReviews && (
                <ShowReviews data={act?.reviewActivities} titulo={`Actividad - ${act.name}`}/>
              )}
            </div>
          ) : null)}
        </div>
      )}
      </div>
    </div>
  );

}