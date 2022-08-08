import {GET_USER} from './actionTypes'
import axios from "axios";

export const getUserForAdmin= () => {
    return async function(dispatch) {
        
        try {
            let result = await axios.get(`http://localhost:3001/admin/user`);
           console.log(result)
            return dispatch({
                type: GET_USER,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};