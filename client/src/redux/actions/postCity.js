import { POST_CITY ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const postCity= (city) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${DB_HEROKU}/cities/`,city);
            console.log(result.data)
            return dispatch({
                type: POST_CITY,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
