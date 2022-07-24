import { GET_HOTELS } from './actionTypes'
import axios from 'axios'

export const getHotels = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3001/hotels`);
            return dispatch({
                type: GET_HOTELS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
