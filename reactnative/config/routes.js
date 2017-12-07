import React , {Component}from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Deputies_List from '../components/deputies_list';
import DeputyDetail from '../components/deputy_detail';
import Spinner from '../components/spinner';



class StackComponent extends React.Component{

    render(){
      const MainStack = StackNavigator({
        Home: {screen: Deputies_List , navigationOptions: {title: 'liste'}},
        Test:{screen: Spinner, navigationOptions: {title: 'test'} },

      },{
      initialRouteName: 'Home',
      });



    return(

        <MainStack/>

      );
  }
}

export default StackComponent;
