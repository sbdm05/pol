import {EMAIL_CHANGED} from '../actions/types';

// We need to define an initial state=> should never return undefined
const INITIAL_STATE = {
  email : '',
  password: '',
  error: '',
  loading: false,
  error_password: false,
  error_email: false

};

export default (state= INITIAL_STATE, action)=>{
  switch (action.type){
    case EMAIL_CHANGED:
      case EMAIL_CHANGED:
      console.log('Changed!')
      return{...state, email: action.payload}; //{...state}=> so the object is updated
    default:
    return state;
  }
};
