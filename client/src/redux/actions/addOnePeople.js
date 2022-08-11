import { ADD_ONE_PEOPLE,DB_HEROKU} from "./actionTypes";
import axios from "axios";

export const addOnePeople = (id,numberPeople,email) => {
  return async function (dispatch) {
    try {
      
       let respuesta=await axios.put(`${DB_HEROKU}/cartdetails/add`,{id,numberPeople})
       
       let resp = await axios.get(`${DB_HEROKU}/carts/${email}`);
      return dispatch({
        type: ADD_ONE_PEOPLE,
        payload:resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};