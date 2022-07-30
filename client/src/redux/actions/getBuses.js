import { GET_BUSES } from './actionTypes'
import axios from 'axios'

export const getBuses= () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3001/business`);
            console.log(result)
            return dispatch({
                type: GET_BUSES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
