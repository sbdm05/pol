import Meteor, { Accounts } from 'react-native-meteor';
import {EMAIL_CHANGED} from './types';
import {PASSWORD_CHANGED} from './types';
import {LOGIN_USER_FAIL} from './types';
import {LOGIN_USER_SUCCESS} from './types';
import { NavigationActions } from 'react-navigation';


export const emailChanged=(text)=>{
  return{
    type: EMAIL_CHANGED, // the (text) will be the type, if you console.log this, you will get the text typed by the user
    payload:text // because we want to communicate the new text that was provided
  };
};


export const passwordChanged = (password)=>{
  return{
    type: PASSWORD_CHANGED,
    payload: password
  };
};


export const loginUser = ( {email, password})=>{

    return (dispatch)=>{
          Meteor.loginWithPassword(email, password, (error) => {
          if (error) {
            console.log('erreur dans le sign in')
            return dispatch ({type: LOGIN_USER_FAIL, payload: email});
          }else{
            console.log('pas d erreur dans le signin')
            return dispatch({type: LOGIN_USER_SUCCESS, payload: email });

          };
        });
    };
};
