import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor from 'react-native-meteor';
import Deputies_List from './components/deputies_list';
import DeputyDetail from './components/deputy_detail';
import Spinner from './components/spinner';
import MainStack from './config/routes';
import {
  TabNavigator
} from 'react-navigation';



export default class App extends React.Component {


   componentWillMount() {
    Meteor.connect('ws://localhost:3000/websocket');
  }


  render() {
    const Tabs = TabNavigator({
    Stack: {screen: MainStack},
    Spinner:{screen: Spinner},
    });

    return (
      <Tabs />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
