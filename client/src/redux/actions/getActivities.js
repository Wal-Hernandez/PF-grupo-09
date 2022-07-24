import { GET_ACTIVITIES } from './actionTypes'
import axios from 'axios'

export const getActivities = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3001/activities`);
            return dispatch({
                type: GET_ACTIVITIES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
