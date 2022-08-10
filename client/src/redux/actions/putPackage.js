import {PUT_PACKAGE,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const putPackage = (id,platform) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`${DB_HEROKU}/packages/${id}`,platform);
            console.log(result.data)
            return dispatch({
                type: PUT_PACKAGE,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
