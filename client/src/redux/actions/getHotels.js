import { GET_HOTELS ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const getHotels = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DB_HEROKU}/hotels`);
            return dispatch({
                type: GET_HOTELS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
