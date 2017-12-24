import React , {Component}from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Deputies_List from '../components/deputies_list';
import DeputyDetail from '../components/deputy_detail';
import DeputyProfile from '../components/deputy_profile';
import authUser from '../components/authUser';
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
import Flat_List from '../components/FlatList';
import Spinner from '../components/spinner';



class StackComponent extends Component{


    render(){

      const MainStack = StackNavigator({
        Auth: {screen: authUser, navigationOptions: {title: 'Login ou SignUp'}},
        Home: {screen: Flat_List , navigationOptions: {title: 'Choisissez votre député'}},
        DeputyProfile:{screen: DeputyProfile, navigationOptions: {title: 'Profile'}},
        SignIn: { screen: SignIn, navigationOptions: {title: 'SignIn'}},
        SignOut: { screen: SignOut, navigationOptions: {title: 'SignOut'}}
      },{
      initialRouteName: 'SignIn'
      });
      console.log(this.props, '---');


    return(

        <MainStack/>

      );
  }
}

export default StackComponent;
//where is this component used?
