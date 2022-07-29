import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
/* import { configureStore } from '@reduxjs/toolkit' */
import thunk from 'redux-thunk';
import rootReducer from "../reducer";

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
);



export default store;