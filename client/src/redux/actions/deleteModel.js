import { DELETE_MODEL } from "./actionTypes";
import axios from "axios";

export const deleteModel = (id, model) => {
  return async function (dispatch) {
    try {
      let result = await axios.delete(`http://localhost:3001/${model}/${id}`);
      return dispatch({
        type: DELETE_MODEL,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
