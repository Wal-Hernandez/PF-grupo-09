import { PUT_BUS } from './actionTypes'
import axios from 'axios'

export const putBus= (id,bus) => {
    return async function(dispatch) {
        try {
            let result = await axios.put(`http://localhost:3001/business/${id}`,bus);
            return dispatch({
                type: PUT_BUS,
                payload: result.data
            })

        } catch (err) {
            console.log(err)
        }
    };
};
