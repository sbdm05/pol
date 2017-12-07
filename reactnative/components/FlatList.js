import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight } from 'react-native';
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
        <FlatList
          data={this.props.deputies}
          keyExtractor={(deputy)=> deputy._id}
          renderItem={({deputy})=>(
             <DeputyDetail deputy={deputy}/>
            )}
        />

    );
  }
}


export default createContainer(params=>{
  Meteor.subscribe('deputies');
  return{
    deputies: Meteor.collection('deputies').find(),
};
},Flat_List);

