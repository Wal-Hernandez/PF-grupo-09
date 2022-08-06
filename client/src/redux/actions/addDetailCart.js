import { ADD_DETAIL_CART } from "./actionTypes";
import axios from "axios";

export const addDetailCart = (idCart,id,email) => {
  return async function (dispatch) {
    try {
      
       let respuesta=await axios.post(`http://localhost:3001/cartdetails`,{idCart:idCart,idPackage:id,numberPeople:1,isQualified:false})
       console.log("RESPUESTA ADDDETAILCART:",respuesta.data)
       let resp = await axios.get(`http://localhost:3001/carts/${email}`);
      return dispatch({
        type: ADD_DETAIL_CART,
        payload:resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};