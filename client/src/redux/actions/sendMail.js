import { SEND_MAIL } from './actionTypes';
import axios from 'axios'

export const sendMail= (mail) => {
    return async function(dispatch) {
        try {
            let result = await axios.post(`http://localhost:3001/mailing`,mail);
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