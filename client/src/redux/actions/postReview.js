import { POST_REVIEW,DB_HEROKU } from "./actionTypes";
import axios from "axios";

export const postReview = (selected, review) => {
  return async function (dispatch) {
    try {
      let result = await axios.post(`${DB_HEROKU}/${selected}`, review);
      return dispatch({
        type: POST_REVIEW,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
