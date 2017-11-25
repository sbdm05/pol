import React , {Component}from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Deputies_List from '../components/deputies_list';
import DeputyDetail from '../components/deputy_detail';
import Spinner from '../components/spinner';
import App from '../App';


class Tabs extends React.Component{

    render(){
      const Tabs = TabNavigator({
        Home: {screen: Deputies_List},
        Spinner:{screen: Spinner},
      },{
      initialRouteName: 'Home',
      });



    return(

        <Tabs/>

      );
  }
}

export default Tabs;
