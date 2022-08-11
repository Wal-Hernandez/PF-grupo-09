import { GET_USER_REVIEWS,DB_HEROKU } from './actionTypes'
import axios from 'axios'

export const getUserReviews= () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DB_HEROKU}/users`);
            return dispatch({
                type: GET_USER_REVIEWS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
