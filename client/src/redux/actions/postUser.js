import { POST_USER } from "./actionTypes";
import axios from "axios";

export const postUser = (userDb) => {
  const { mail, storage } = userDb;
  return async function (dispatch) {
    try {
      let result = await axios.post(`http://localhost:3001/users`, userDb);
      let result2 = await axios.put(`http://localhost:3001/carts/login`, {
        mail,
        storage,
      });
      console.log("result", result2);
      return dispatch({
        type: POST_USER,
        payload: result2.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
