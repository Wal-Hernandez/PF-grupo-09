import { POST_REVIEW } from "./actionTypes";
import axios from "axios";

export const postReview = (selected, review) => {
  return async function (dispatch) {
    try {
      let result = await axios.post(`http://localhost:3001/${selected}`, review);
      return dispatch({
        type: POST_REVIEW,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
