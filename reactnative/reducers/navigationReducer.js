//Add NavigationActions
import {NavigationActions} from 'react-navigation';
//Import Root Navigator
import MainStack from '../config/routes';

const ActionForLoggedOut = MainStack.router.getActionForPathAndParams('SignIn');
const ActionForLoggedIn = MainStack.router.getActionForPathAndParams('Home');

const stateForLoggedOut = MainStack.router.getStateForAction(ActionForLoggedOut);
const stateForLoggedIn = MainStack.router.getStateForAction(ActionForLoggedIn);

const initialState= {stateForLoggedOut, stateForLoggedIn};


const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@@redux/INIT":
      return {
        ...state,
        stateForLoggedIn: MainStack.router.getStateForAction(ActionForLoggedIn, stateForLoggedOut)
      };

    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        stateForLoggedIn: MainStack.router.getStateForAction(ActionForLoggedIn, stateForLoggedOut)
      };

    case "LOGIN_USER_FAIL":
      return {
        ...state,
        stateForLoggedOut: MainStack.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "SignIn" })]
          })
        )
      };

    default:
      return {
        ...state,
        stateForLoggedIn: MainStack.router.getStateForAction(action,state.stateForLoggedIn)
      };
  }
};

export default navigationReducer;


