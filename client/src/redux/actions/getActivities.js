import { GET_ACTIVITIES ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const getActivities = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DB_HEROKU}/activities`);
            return dispatch({
                type: GET_ACTIVITIES,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
