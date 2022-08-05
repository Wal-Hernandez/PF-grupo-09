import { REMOVE_DETAIL_CART } from "./actionTypes";
import axios from "axios";

export const removeDetailCart = (id) => {
  return async function (dispatch) {
    try {
      let result = await axios.delete(`http://localhost:3001/cartdetails/${id}`);
      return dispatch({
        type: REMOVE_DETAIL_CART,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
