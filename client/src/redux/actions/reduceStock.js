import { REDUCE_STOCK} from "./actionTypes";
import axios from "axios";

export const reduceStock = (item) => {
  return async function (dispatch) {
    try {
      
       let respuesta=await axios.put(`http://localhost:3001/stock`,item)
       
      return dispatch({
        type: REDUCE_STOCK,
        
      });
    } catch (err) {
      console.log(err);
    }
  };
};