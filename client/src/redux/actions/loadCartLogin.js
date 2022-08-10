import { LOAD_CART_LOGIN,DB_HEROKU } from "./actionTypes";
import axios from "axios";

export const loadCartLogin = (mail,storage) => {
  return async function (dispatch) {
    try {
      let result = await axios.put(`${DB_HEROKU}/carts/login`,{mail,storage});
      return dispatch({
        type: LOAD_CART_LOGIN,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};