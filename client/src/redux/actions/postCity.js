import { POST_CITY } from './actionTypes'
import axios from 'axios'

export const postCity= (city) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`http://localhost:3001/cities/`,city);
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
