import React , {Component}from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Deputies_List from '../components/deputies_list';
import DeputyDetail from '../components/deputy_detail';
import DeputyProfile from '../components/deputy_profile';
import Flat_List from '../components/FlatList';
import Spinner from '../components/spinner';



class StackComponent extends React.Component{

    render(){
      const MainStack = StackNavigator({
        Home: {screen: Flat_List , navigationOptions: {title: 'flatlist'}},
        DeputyProfile:{screen: Spinner, navigationOptions: {title: 'test'} },

      },{
      initialRouteName: 'Home',
      });



    return(

        <MainStack/>

      );
  }
}

export default StackComponent;
