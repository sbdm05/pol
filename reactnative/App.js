import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor from 'react-native-meteor';
import Deputies_List from './components/deputies_list';
import DeputyDetail from './components/deputy_detail';
import Tabs from './config/routes';


Meteor.connect('ws:localhost127.0.0.1:3001/websocket');


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Deputies_List/>
      </View>
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
