import { POST_BUS ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const postBus= (bus) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${DB_HEROKU}/business`,bus);
            console.log(result.data)
            return dispatch({
                type: POST_BUS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
