import { GET_PACKAGES } from './actionTypes'
import axios from 'axios'

export const getPackages = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3001/packages`);
            console.log(result.data)
            return dispatch({
                type: GET_PACKAGES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};