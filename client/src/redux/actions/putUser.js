import {PUT_USER} from './actionTypes'
import axios from "axios";

export const PutUser= (id,rol) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`http://localhost:3001/admin/${id}`,rol);
            return dispatch({
                type: PUT_USER,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};