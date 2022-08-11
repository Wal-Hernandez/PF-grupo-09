import { REDUCE_STOCK,DB_HEROKU} from "./actionTypes";
import axios from "axios";

export const reduceStock = (item) => {
  return async function (dispatch) {
    try {
      
       let respuesta=await axios.put(`${DB_HEROKU}/stock`,item)
       
      return dispatch({
        type: REDUCE_STOCK,
        
      });
    } catch (err) {
      console.log(err);
    }
  };
};