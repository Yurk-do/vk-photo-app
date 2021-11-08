import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { registrationReducer } from './registrationReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
});
