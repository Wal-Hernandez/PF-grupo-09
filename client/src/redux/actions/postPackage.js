import {POST_PACKAGE} from './actionTypes'
import axios from 'axios'

export const postPackage = (packages) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`http://localhost:3001/packages`,packages);
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
