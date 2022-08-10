import { POST_USER,DB_HEROKU } from "./actionTypes";
import axios from "axios";

export const postUser = (userDb) => {
  const { mail, storage } = userDb;
  return async function (dispatch) {
    try {
      let result = await axios.post(`${DB_HEROKU}/users`, userDb);
      let result2 = await axios.put(`${DB_HEROKU}/carts/login`, {
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
