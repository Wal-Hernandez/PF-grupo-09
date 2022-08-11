import { SEND_MAIL,DB_HEROKU } from './actionTypes';
import axios from 'axios'

export const sendMail= (mail) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`${DB_HEROKU}/mailing`,mail);
            console.log(result.data)
            return dispatch({
                type: SEND_MAIL,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};