import React, {useEffect } from 'react'
import { getPackages } from "../../redux/actions/getPackages";
import { getPackageId } from "../../redux/actions/getPackageId";
import { getClean } from "../../redux/actions/getClean";
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from "firebase/auth";
import { addOnePeople } from '../../redux/actions/addOnePeople';
import { deleteOnePeople } from '../../redux/actions/deleteOnePeople';
import {TYPES} from '../../redux/actions/shoppingActions';



export default function ProductItem({id, quantity, data, arrayCartNotLoggedin,delFromCart,idDetail,addToCart}) {
    const dispatch = useDispatch();
    console.log(id)
    data=data[0]
    console.log(data)
    const auth = getAuth();
    const user = auth.currentUser;


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
        myCarttextLoggedin = localStorage.getItem("myCartLoggedin")
        myCartparsedLoggedin= JSON.parse(myCarttextLoggedin)
    } 
      // ...
    } else {
      // No user is signed in.
      console.log("No logueado")
      if(localStorage.getItem("myCartNotLoggedin")){
          console.log("estamos en shopping cart y el carrito existe")
          myCarttext = localStorage.getItem("myCartNotLoggedin")
          myCartparsed= JSON.parse(myCarttext)        
      } 
      myCartAll=myCartparsedfilteredNotLoggedin
    }
  
 

    const addOne=(id,idCartDetail,numberPeople)=>{
    
            if(user)
        {
          dispatch(addOnePeople(idCartDetail,numberPeople,user.email))
        } else {
          dispatch({type:TYPES.ADD_TO_CART, payload:id})
        }
        
          }
          const deleteOne=(id, idCartDetail,numberPeople)=>{
            
            if(user){
              dispatch(deleteOnePeople(idCartDetail,numberPeople,user.email))
            }
            else{
              dispatch({type:TYPES.REMOVE_ONE_FROM_CART, payload:id})
        
            }
     
      
    }


    return(
        <div>{data ? <div>
        <h1>{data.name}</h1>
        <p>
           <button onClick={()=>deleteOne(id, idDetail,quantity)} 
                   disabled={quantity===1} 
                   className='btn btn-success'>
                    -
           </button>
           {quantity} Personas
           <button onClick={()=>addOne(id,idDetail,quantity)}
                   disabled={quantity>=data.stock} 
                   className='btn btn-success'>
                    +
           </button> 
          Precio Unitario x ${data.price}.00 = ${quantity * data.price}.00
        </p>
            <button className='btn btn-warning' onClick={()=>delFromCart(id,idDetail)}>
               Eliminar
           </button>
        </div>
        : null }
        <hr></hr>
        </div> 
    )
}