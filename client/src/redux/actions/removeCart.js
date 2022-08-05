import { REMOVE_CART } from "./actionTypes";
import axios from "axios";

export const removeCart = (id,email) => {
  return async function (dispatch) {
    try {
      let result = await axios.delete(`http://localhost:3001/carts/${id}`);
      let resp = await axios.get(`http://localhost:3001/carts/${email}`);

      return dispatch({
        type: REMOVE_CART,
        payload:resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};