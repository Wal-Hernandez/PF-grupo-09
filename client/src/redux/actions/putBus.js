import { PUT_BUS ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const putBus= (id,bus) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`${DB_HEROKU}/business/${id}`,bus);
            return dispatch({
                type: PUT_BUS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
