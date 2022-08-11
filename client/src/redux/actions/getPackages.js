import { GET_PACKAGES,DB_HEROKU } from './actionTypes'
import axios from 'axios'

export const getPackages = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DB_HEROKU}/packages`);
            console.log(result.data)
            return dispatch({
                type: GET_PACKAGES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};