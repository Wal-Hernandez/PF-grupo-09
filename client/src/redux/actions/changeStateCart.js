import { CHANGE_STATE_CART } from './actionTypes'
import axios from 'axios'

export const changeStateCart= (changeCart) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`http://localhost:3001/payment`,changeCart);
            const {mail}=changeCart
            let resp = await axios.get(`http://localhost:3001/carts/${mail}`);
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
