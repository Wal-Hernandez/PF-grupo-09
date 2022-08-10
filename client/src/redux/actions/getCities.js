import { GET_CITIES,DB_HEROKU } from './actionTypes'
import axios from 'axios'

export const getCities= () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DB_HEROKU}/cities`);
            return dispatch({
                type: GET_CITIES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
