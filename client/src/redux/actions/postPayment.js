import { POST_PAYMENT } from "./actionTypes";
import axios from "axios";

export const postPayment = (payment) => {
  return async function (dispatch) {
    try {
      console.log(payment);
      let result = await axios.post(`http://localhost:3001/payment`, payment);
      console.log(result.data);
      return dispatch({
        type: POST_PAYMENT,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
