
import {
    GET_PACKAGES,
    GET_MAIN_PACKAGES
} from '../actions/actionTypes';

const initialState = {
    packages: [],
    showPackages: [],
    detail: [],
    isAdmin: null,

};



export default function rootReducer(state = initialState, { type, payload }) {
    console.log(payload);
    switch (type) {
        case GET_PACKAGES:
            console.log(payload)
            return {
                ...state,
                packages: payload
            }
        case GET_MAIN_PACKAGES:
            return {
                ...state,
                showPackages: state.packages.slice(0,4) || "nada"
            }
        default:
            return state;
    }
}