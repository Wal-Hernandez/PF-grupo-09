import {
    GET_OFFERS,DB_HEROKU
} from "./actionTypes";

import axios from 'axios';


function getOffers() {
    return async function(dispatch) {
        try {
            let result = await axios.get(`${DB_HEROKU}/packages`);
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