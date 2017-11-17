import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor from 'react-native-meteor';


Meteor.connect('ws:localhost127.0.0.1:3001/websocket');


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!!</Text>
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
