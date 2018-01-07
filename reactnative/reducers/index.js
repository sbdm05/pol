import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import navigationReducer from './navigationReducer';

export default combineReducers({
  auth : AuthReducer,
  navigationReducer
});
