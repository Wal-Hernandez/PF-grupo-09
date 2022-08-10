import { FINISH_TRAVEL,DB_HEROKU} from "./actionTypes";
import axios from "axios";

export const finishTravel = (id,mail) => {
  return async function (dispatch) {
    try {
       let respuesta=await axios.put(`${DB_HEROKU}/carts/finish/${id}`)
       let result = await axios.get(`${DB_HEROKU}/shopping/${mail}`);
      return dispatch({
        type: FINISH_TRAVEL,
        payload:result.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};