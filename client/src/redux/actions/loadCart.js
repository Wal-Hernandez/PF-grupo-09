import { LOAD_CART } from "./actionTypes";
import axios from "axios";

export const loadCart = (mail) => {
  return async function (dispatch) {
    try {
      let result = await axios.get(`http://localhost:3001/carts/${mail}`);
      return dispatch({
        type: LOAD_CART,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
