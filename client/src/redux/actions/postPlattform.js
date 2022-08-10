import {POST_PLATFORM,DB_HEROKU} from './actionTypes'
import axios from 'axios'

export const postPlatform= (platform) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${DB_HEROKU}/plattforms`,platform);
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