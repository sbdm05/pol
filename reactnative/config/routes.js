import React , {Component}from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Deputies_List from '../components/deputies_list';
import DeputyDetail from '../components/deputy_detail';
import Spinner from '../components/spinner';



class Tabs extends React.Component{

    render(){
      const MainStack = StackNavigator({
        Home: {screen: Spinner},
        Spinner:{screen: Deputies_List},
      },{
      initialRouteName: 'Spinner',
      });



    return(

        <MainStack/>

      );
  }
}

export default Tabs;
