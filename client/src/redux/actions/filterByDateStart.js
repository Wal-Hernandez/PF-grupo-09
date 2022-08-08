import axios from "axios";
import { FILTER_BY_DATE, API_DB } from "./actionTypes";

export const filterByDate = (destination, start, end) => {
    return async(dispatch) => {
        try {
            let result = await axios.get(
                `${API_DB}/packages?destination=${destination}&start=${start}&end=${end}`
            );
            return dispatch({
                type: FILTER_BY_DATE,
                payload: result.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};