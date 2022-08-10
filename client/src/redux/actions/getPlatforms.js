import { GET_PLATFORMS ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const getPlatforms = () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DB_HEROKU}/plattforms`);
            return dispatch({
                type: GET_PLATFORMS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
