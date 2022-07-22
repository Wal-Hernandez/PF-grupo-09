
import {
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
            return {
                ...state,
                packages: payload
            }
        default:
            return state;
    }
}