import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import DeputyProfile from './deputy_profile';
import SearchBar from 'react-native-searchbar'
import Tabs from '../config/routes.js';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

//This component renders the full list of deputies

class Flat_List extends Component{


  constructor(props){
    super(props);
    this._handleResults = this._handleResults.bind(this);
    this.state={
      data : []
    }
  }


    _handleResults(results){
    console.log('test')
  }

   render(){
    const {deputies}= this.props; // the list is here


    return(
    <View>

      <SearchBar
        ref={(ref) => this.searchBar = ref}
        data={deputies}
        handleResults={this._handleResults.bind(this)}
        showOnLoad
        allDataOnEmptySearch
        hideBack
        autoCorrect= {false}
      />

      <List>
        <FlatList
          data={this.props.deputies}
          keyExtractor={(item)=> item._id}
          renderItem={({item})=>(
             <DeputyDetail deputy={item.depute} navigation={this.props.navigation} /> )} />
      </List>

    </View>
    );
  }



}


export default createContainer(params=>{
  Meteor.subscribe('deputies');
  return{
    deputies: Meteor.collection('deputies').find(),
};
},Flat_List);

