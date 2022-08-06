import { ADD_ONE_PEOPLE} from "./actionTypes";
import axios from "axios";

export const addOnePeople = (id,numberPeople,email) => {
  return async function (dispatch) {
    try {
      
       let respuesta=await axios.put(`http://localhost:3001/cartdetails/add`,{id,numberPeople})
       
       let resp = await axios.get(`http://localhost:3001/carts/${email}`);
      return dispatch({
        type: ADD_ONE_PEOPLE,
        payload:resp.data
      });
    } catch (err) {
      console.log(err);
    }
  };
};