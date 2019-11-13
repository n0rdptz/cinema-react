import {createStore, applyMiddleware} from 'redux';
import reducer from './rootReducer';
import thunk from 'redux-thunk';

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;
