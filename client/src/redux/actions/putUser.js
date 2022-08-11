import {PUT_USER,DB_HEROKU} from './actionTypes'
import axios from "axios";

export const PutUser= (id,rol) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${DB_HEROKU}/admin/${id}`,rol);
            return dispatch({
                type: PUT_USER,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};