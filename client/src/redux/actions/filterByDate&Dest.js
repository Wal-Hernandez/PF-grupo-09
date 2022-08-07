import axios from "axios";
import { FILTER_BY_DATE } from "./actionTypes";

export const filterByDate = (destination, start, price, stock) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(
        `http://localhost:3001/packages?destination=${destination}&start=${start}&price=${price}&stock=${stock}`
      );
      return dispatch({
        type: FILTER_BY_DATE,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};