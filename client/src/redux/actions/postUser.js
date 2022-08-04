import { POST_USER } from "./actionTypes";
import axios from "axios";

export const postUser = (userDb) => {
  return async function (dispatch) {
    try {
      let result = await axios.post(`http://localhost:3001/users`, userDb);
      return dispatch({
        type: POST_USER,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
