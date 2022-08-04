import {PUT_PACKAGE} from './actionTypes'
import axios from 'axios'

export const putPackage = (id,platform) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`http://localhost:3001/packages/${id}`,platform);
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
