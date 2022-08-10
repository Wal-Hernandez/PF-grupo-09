import { ENABLE_MODEL,DB_HEROKU } from "./actionTypes";
import axios from "axios";

export const enableModel = (id, model) => {
    return async function(dispatch) {
        try {
            console.log(model)
            let result = await axios.put(`${DB_HEROKU}/${model}/enable/${id}`)
            return dispatch({
                type: ENABLE_MODEL,
                payload: result.data
            });
        } catch (err) {
            console.log(err);
        }
    };
};