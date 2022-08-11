import { POST_HOTEL ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const postHotel= (hotel) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${DB_HEROKU}/hotels`,hotel);
            console.log(result.data)
            return dispatch({
                type: POST_HOTEL,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};