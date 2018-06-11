import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth/authReducer';
import loanReducer from './loan/loanReducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // add options here
    })
    : compose;

const rootReducer = combineReducers({
  auth: authReducer,
  loan: loanReducer,
  form: formReducer
});

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
);

export default store;