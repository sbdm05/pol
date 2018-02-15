import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor from 'react-native-meteor';
import Deputies_List from './components/deputies_list';
import DeputyDetail from './components/deputy_detail';
import Flat_List from './components/FlatList';
import Spinner from './components/spinner';
import StackComponent from './config/routes';
import {
  TabNavigator, addNavigationHelpers }
from 'react-navigation';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {


   componentWillMount() {
    Meteor.connect('ws://localhost:3000/websocket');
  }


  render() {
    const Tabs = TabNavigator({
    List: {screen: StackComponent},
    //Spinner:{screen: Spinner, navigationOptions: {title: 'spinner'}},
    //Profil: {screen: Spinner, navigationOptions:{title: 'Mon Profil'}}
  });

    //Créer le Store connecté avec ReduxThunk
    const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
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
