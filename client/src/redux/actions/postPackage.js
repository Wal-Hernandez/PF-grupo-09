import {
    POST_PACKAGE,
} from './actionTypes'

function postPackage() {
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

    export default postPackage