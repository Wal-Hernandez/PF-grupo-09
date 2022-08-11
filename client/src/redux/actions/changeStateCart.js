import { CHANGE_STATE_CART,DB_HEROKU } from './actionTypes'
import axios from 'axios'

export const changeStateCart= (changeCart) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`${DB_HEROKU}/payment`,changeCart);
            const {mail}=changeCart
            let resp = await axios.get(`${DB_HEROKU}/carts/${mail}`);
            console.log(result.data)
            return dispatch({
                type: CHANGE_STATE_CART,
                payload: resp.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
