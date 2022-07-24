import { GET_CITIES } from './actionTypes'
import axios from 'axios'

export const getCities= () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3001/cities`);
            return dispatch({
                type: GET_CITIES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
