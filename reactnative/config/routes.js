import React , {Component}from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Deputies_List from '../components/deputies_list';
import DeputyDetail from '../components/deputy_detail';
import DeputyProfile from '../components/deputy_profile';
import SignIn from '../components/authUser';
import Flat_List from '../components/FlatList';
import Spinner from '../components/spinner';



class StackComponent extends Component{


    render(){

      const MainStack = StackNavigator({
        Auth: {screen: SignIn, navigationOptions: {title: 'Login ou SignUp'}},
        Home: {screen: Flat_List , navigationOptions: {title: 'Choisissez votre député'}},
        DeputyProfile:{screen: DeputyProfile, navigationOptions: {title: 'Profile'}},
        SignIn: { screen: SignIn, navigationOptions: {title: 'SignIn'}}
      },{
      initialRouteName: 'Auth'
      });
      console.log(this.props, '---');


    return(

        <MainStack/>

      );
  }
}

export default StackComponent;
//where is this component used?
