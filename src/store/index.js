import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import login from '../reducers/login';

const combined = combineReducers({ login, });
const store = createStore(
  combined,
  applyMiddleware(thunk)
);

export default store;
