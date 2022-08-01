import React, {useEffect } from 'react'
import { getPackages } from "../../redux/actions/getPackages";
import { getPackageId } from "../../redux/actions/getPackageId";
import { getClean } from "../../redux/actions/getClean";
import { useSelector, useDispatch } from 'react-redux';
import { getAuth } from "firebase/auth";

export default function ProductItem({id, quantity, data, arrayCartNotLoggedin}) {
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



    return(
        <div>{data ? <div>
        <h1>{data.name}</h1>
        <p>{quantity} Personas x ${data.price}.00 = ${quantity * data.price}.00</p>
        </div>
        : null }
        <hr></hr>
        </div> 
    )
}