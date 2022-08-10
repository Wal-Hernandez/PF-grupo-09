import axios from "axios";
import { FILTER_BY_ACTIVITY ,DB_HEROKU} from "./actionTypes";

export const filterByActivity = (activity, price, stock, destination) => {
  return async (dispatch) => {
    try {
      let result = await axios.get(
        `${DB_HEROKU}/packages?activity=${activity}&price=${price}&stock=${stock}&destination=${destination}`
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