import { CLEAR_CART_LOGOUT } from "./actionTypes";
import axios from "axios";

export const clearCartLogout = () => {
  return async function (dispatch) {
    try {
    
      return dispatch({
        type: CLEAR_CART_LOGOUT,
      });
    } catch (err) {
      console.log(err);
    }
  };
};