import { PUT_HOTEL,DB_HEROKU } from './actionTypes'
import axios from 'axios'

export const putHotel= (id,hotel) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`${DB_HEROKU}/hotels/${id}`,hotel);
            console.log(result.data)
            return dispatch({
                type: PUT_HOTEL,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
