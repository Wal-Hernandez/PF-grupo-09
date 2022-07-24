import { GET_PLATFORMS } from './actionTypes'
import axios from 'axios'

export const getPlatforms = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3001/plattforms`);
            return dispatch({
                type: GET_PLATFORMS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
