import { PUT_CITY } from './actionTypes'
import axios from 'axios'

export const putCity= (id,city) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`http://localhost:3001/cities/${id}`,city);
            console.log(result.data)
            return dispatch({
                type: PUT_CITY,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
