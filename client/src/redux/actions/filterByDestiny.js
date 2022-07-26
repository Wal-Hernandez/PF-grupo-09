import axios from "axios";
import { FILTER_BY_DESTINY } from "./actionTypes";

export const filterByDestiny = (destination, price, stock) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(
        `http://localhost:3001/packages?destination=${destination}&price=${price}&stock=${stock}`
      );
      return dispatch({
        type: FILTER_BY_DESTINY,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};