
import { GET_USERS,DB_HEROKU } from './actionTypes'
import axios from 'axios'

export const getUsers= () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DB_HEROKU}/users`);    
            return dispatch({
                type: GET_USERS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
