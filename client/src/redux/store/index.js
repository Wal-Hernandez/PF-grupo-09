<<<<<<< HEAD
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
/* import { configureStore } from '@reduxjs/toolkit' */
=======
import { createStore, applyMiddleware, compose } from 'redux';
>>>>>>> 05d1d5f40084e70cef4e298d3df90ac4f50d9438
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;