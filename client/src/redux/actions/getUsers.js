
import { GET_USERS } from './actionTypes'
import axios from 'axios'

export const getUsers= () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3001/users`);    
            return dispatch({
                type: GET_USERS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
