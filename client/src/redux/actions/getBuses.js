import { GET_BUSES ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const getBuses= () => {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DB_HEROKU}/business`);
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
