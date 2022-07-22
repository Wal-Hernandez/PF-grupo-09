import {
    GET_PACKAGES,
} from './actionTypes'

function getPackages() {
    return function (dispatch) {
        axios.get().then(res => {
            dispatch({
            
            })
        }, err => {
            dispatch({
             
            })
        });
    
    }
    }

    export default getPackages