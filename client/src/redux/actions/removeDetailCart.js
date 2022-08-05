import { REMOVE_DETAIL_CART } from "./actionTypes";
import axios from "axios";

export const removeDetailCart = (id,mail) => {
  return async function (dispatch) {
    try {
      let result = await axios.delete(`http://localhost:3001/cartdetails/${id}`);
      let resp = await axios.get(`http://localhost:3001/carts/${mail}`);

      return dispatch({
        type: REMOVE_DETAIL_CART,
        payload:resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};