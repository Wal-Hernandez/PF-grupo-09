import { createStore,combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducer/rootReducer.js";
import adminReducer from "../reducer/adminReducer.js";

import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    combineReducers({rootReducer,adminReducer}),
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;