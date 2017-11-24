import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor from 'react-native-meteor';
import Deputies_List from './components/deputies_list';
import DeputyDetail from './components/deputy_detail';
import Tabs from './config/routes';




export default class App extends React.Component {

   componentWillMount() {
    Meteor.connect('ws://localhost:3000/websocket');
  }



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
