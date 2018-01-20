import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import UserDeputyReducer from './UserDeputyReducer';

export default combineReducers({
  auth : AuthReducer,
  deputyselected : UserDeputyReducer
});
