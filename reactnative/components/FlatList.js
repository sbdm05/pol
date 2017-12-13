import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight, SearchBar } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import DeputyProfile from './deputy_profile';
import Tabs from '../config/routes.js';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';



class Flat_List extends Component{


   render(){
    const {deputies}= this.props; // the list is here
    const { navigate } = this.props.navigation;



    return(
      <List>
        <FlatList
          data={this.props.deputies}
          keyExtractor={(item)=> item._id}
          renderItem={({item})=>(
             <DeputyDetail deputy={item.depute}/>
            )}
        />
      </List>
    );
  }
}


export default createContainer(params=>{
  Meteor.subscribe('deputies');
  return{
    deputies: Meteor.collection('deputies').find(),
};
},Flat_List);

