import { PUT_CITY ,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const putCity= (id,city) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`${DB_HEROKU}/cities/${id}`,city);
            console.log(result.data)
            return dispatch({
                type: PUT_CITY,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
