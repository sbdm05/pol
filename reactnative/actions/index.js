import {EMAIL_CHANGED} from './types';


export const emailChanged=(text)=>{
  return{
    type: EMAIL_CHANGED,
    payload:text // because we want to communicate the new text that was provided
  };
};
