import { authReducer } from './auth';
import { combineReducers } from 'redux';


export const reducers = combineReducers({
  authState: authReducer
});