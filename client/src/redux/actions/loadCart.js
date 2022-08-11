import { LOAD_CART ,DB_HEROKU} from "./actionTypes";
import axios from "axios";

export const loadCart = (mail) => {
  return async function (dispatch) {
    try {
      let result = await axios.get(`${DB_HEROKU}/carts/${mail}`);
      return dispatch({
        type: LOAD_CART,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
