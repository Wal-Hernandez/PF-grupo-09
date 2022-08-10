import {POST_PACKAGE,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const postPackage = (packages) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${DB_HEROKU}/packages`,packages);
            console.log(result.data)
            return dispatch({
                type: POST_PACKAGE,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
