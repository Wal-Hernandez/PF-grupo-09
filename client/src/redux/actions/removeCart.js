import { REMOVE_CART,DB_HEROKU } from "./actionTypes";
import axios from "axios";

export const removeCart = (id,email) => {
  return async function (dispatch) {
    try {
      let result = await axios.delete(`${DB_HEROKU}/carts/${id}`);
      let resp = await axios.get(`${DB_HEROKU}/carts/${email}`);

      return dispatch({
        type: REMOVE_CART,
        payload:resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};