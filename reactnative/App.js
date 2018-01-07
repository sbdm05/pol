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
import {Provider, connect} from 'react-redux';
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
    Spinner:{screen: Spinner, navigationOptions: {title: 'spinner'}},
    FlatList: {screen: Flat_List, navigationOptions:{title: 'flatlist'}}
  });

    //Créer le Store connecté avec ReduxThunk
    const store= createStore(reducers, {}, applyMiddleware(ReduxThunk));

    //Créer App pour ReduxNavigation
    const App=({dispatch, navigationReducer})=>(
      <Tabs
        navigation={addNavigationHelpers({
          dispatch,
          state: navigationReducer,
        })}

      />
      );

    const mapStateToProps=(state=>({
      navigationReducer: state.navigationReducer,
    }))

    const AppWithNavigation= connect(mapStateToProps)(App);


    return (
      <Provider store={store}>
        <AppWithNavigation />
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


