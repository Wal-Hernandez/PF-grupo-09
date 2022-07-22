import {
    GET_PACKAGES,
} from './actionTypes'
import axios from "axios"
export const getPackages= () => {
    return function (dispatch) {
        axios.get(`http://localhost:3000/packages`).then(res => {
            dispatch({
                type: GET_PACKAGES, payload: res.data || {}
            })
        },err => {
            dispatch({
                type: GET_PACKAGES, payload: err || {}
            })
        });
    
    }
    }

   