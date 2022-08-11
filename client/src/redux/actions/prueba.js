import { PRUEBA} from "./actionTypes";
import axios from "axios";

export const prueba = () => {
  return async function (dispatch) {
    try {
     
      return dispatch({
        type: PRUEBA,
       
      });
    } catch (err) {
      console.log(err);
    }
  };
};