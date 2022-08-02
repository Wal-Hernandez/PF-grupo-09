import axios from "axios";
import { FILTER_BY_DATE } from "./actionTypes";

export const filterByDate = (destination, start) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(
        `http://localhost:3001/packages?destination=${destination}&start=${start}`
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