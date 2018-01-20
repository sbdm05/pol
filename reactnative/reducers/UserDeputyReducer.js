import {SELECTED_DEPUTY} from '../actions/types';


const INITIAL_STATE={
  result:[]
};



export default function (state= INITIAL_STATE, action){
  switch (action.type){
    case SELECTED_DEPUTY:
      console.log('from user reducer', state)
      return action.payload;

    default:
      return state;
  }
}
