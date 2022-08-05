import { ADD_DETAIL_CART } from "./actionTypes";
import axios from "axios";

export const addDetailCart = (idCart,id) => {
  return async function (dispatch) {
    try {
      
       let respuesta=await axios.post(`http://localhost:3001/cartdetails`,{idCart:idCart,idPackage:id,numberPeople:1,isQualified:false})
       console.log("RESPUESTA ADDDETAILCART:",respuesta.data)
      return dispatch({
        type: ADD_DETAIL_CART,
      });
    } catch (err) {
      console.log(err);
    }
  };
};