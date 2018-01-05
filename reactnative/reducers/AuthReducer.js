import {EMAIL_CHANGED} from '../actions/types';
import {PASSWORD_CHANGED} from '../actions/types';
import {LOGIN_USER_FAIL} from '../actions/types';
import {LOGIN_USER_SUCCESS} from '../actions/types';

// We need to define an initial state=> should never return undefined
const INITIAL_STATE = {
  email : 'test',
  password: 'test',
  error: '',
  loading: false,
  error_password: false,
  error_email: false
};



export default (state= INITIAL_STATE, action)=>{
//console.log(action);

  switch (action.type){
      case EMAIL_CHANGED:
      console.log('Changed!')
      return{...state, email: action.payload}; //{...state}=> so the object is updated

      case PASSWORD_CHANGED:
      console.log('password changed')
      return{...state, password: action.payload};

      case LOGIN_USER_FAIL:
      console.log('from login user fail reducer');
      return {...state, email:'fail'};


      case LOGIN_USER_SUCCESS:
      console.log('from login user success reducer');
      return {...state, email:'success'}



    default:
    return state;
  }
};
