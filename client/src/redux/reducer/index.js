
import {
    GET_OFFERS,
    GET_PACKAGES
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
        case GET_OFFERS:
            return {
                ...state,
                showPackages: state.packages.slice(0,3)
            }
        default:
            return state;
    }
}