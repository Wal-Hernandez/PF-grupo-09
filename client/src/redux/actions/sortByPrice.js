import { SORT_BY_PRICE,DB_HEROKU } from "./actionTypes";
import axios from 'axios'

export const sortByPrice = (price, destination, start, activity) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(
        `${DB_HEROKU}/packages?price=${price}&destination=${destination}&start=${start}&activity=${activity}`
      );
      return dispatch({
        type: SORT_BY_PRICE,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};