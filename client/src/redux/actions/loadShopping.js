import { LOAD_SHOPPING } from "./actionTypes";
import axios from "axios";

export const loadShopping = (mail) => {
  return async function (dispatch) {
    try {
      let result = await axios.get(`http://localhost:3001/shopping/${mail}`);
      return dispatch({
        type: LOAD_SHOPPING,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};