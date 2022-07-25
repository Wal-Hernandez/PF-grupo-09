import { POST_HOTEL } from './actionTypes'
import axios from 'axios'

export const postHotel= (hotel) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`http://localhost:3001/hotels`,hotel);
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