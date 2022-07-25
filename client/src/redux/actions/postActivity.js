import { POST_ACTIVITY } from './actionTypes'
import axios from 'axios'

export const postActivity= (hotel) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`http://localhost:3001/activities`,hotel);
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