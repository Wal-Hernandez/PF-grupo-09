import { DELETE_REVIEW,DB_HEROKU } from "./actionTypes";
import axios from "axios";

export const deleteReview = (selected, id) => {
  return async function (dispatch) {
    try {
      let result = await axios.delete(`${DB_HEROKU}/${selected}/${id}`);
      return dispatch({
        type: DELETE_REVIEW,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
