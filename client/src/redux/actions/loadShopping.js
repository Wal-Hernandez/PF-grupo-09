import { LOAD_SHOPPING,DB_HEROKU } from "./actionTypes";
import axios from "axios";

export const loadShopping = (mail) => {
  return async function (dispatch) {
    try {
      let result = await axios.get(`${DB_HEROKU}/shopping/${mail}`);
      return dispatch({
        type: LOAD_SHOPPING,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};