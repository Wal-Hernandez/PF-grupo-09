import {POST_PLATFORM} from './actionTypes'
import axios from 'axios'

export const postPlatform= (platform) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`http://localhost:3001/plattforms`,platform);
            console.log(result.data)
            return dispatch({
                type: POST_PLATFORM,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};