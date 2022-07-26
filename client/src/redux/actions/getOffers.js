import {
    GET_OFFERS
} from "./actionTypes";

import axios from 'axios';


function getOffers() {
    return async function(dispatch) {
        try {
            let result = await axios.get(`http://localhost:3000/packages`);
            return dispatch({
                type: GET_OFFERS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
}

export default getOffers