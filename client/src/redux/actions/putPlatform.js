import {PUT_PLATFORM} from './actionTypes'
import axios from 'axios'

export const putPlatform= (id,platform) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`http://localhost:3001/plattforms/${id}`,platform);
            console.log(result.data)
            return dispatch({
                type: PUT_PLATFORM,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
