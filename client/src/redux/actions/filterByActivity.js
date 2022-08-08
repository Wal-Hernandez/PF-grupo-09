import axios from "axios";
import { FILTER_BY_ACTIVITY } from "./actionTypes";

export const filterByActivity = (activity, price, stock) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(
        `http://localhost:3001/packages?activity=${activity}&price=${price}&stock=${stock}`
      );
      return dispatch({
        type: FILTER_BY_ACTIVITY,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};