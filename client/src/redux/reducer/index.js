import {
    GET_PACKAGES
} from '../actions/actionTypes';

const initialState = {
    packages: [],
    showPackages: [],
    detail: [],
    isAdmin: null,
};



export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PACKAGES:
            return {
                ...state,
                packages: action.payload
            }
        default:
            return state;
    }
}