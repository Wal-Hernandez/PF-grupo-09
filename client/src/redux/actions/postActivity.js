import { POST_ACTIVITY ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const postActivity= (hotel) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${DB_HEROKU}/activities`,hotel);
            console.log(result.data)
            return dispatch({
                type: POST_ACTIVITY,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};