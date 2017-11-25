import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import Tabs from '../config/routes.js';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';



class Deputies_List extends Component{

   static navigationOptions = {
    title: 'Liste des Députés',
    TabBarLabel: 'Liste',
    };

   render(){
    const {deputies}= this.props; // the list is here
    const { navigate } = this.props.navigation;

    return(

      <View>
        <Text>Testing</Text>
          {this.props.deputies.map(deputy=><DeputyDetail deputy={deputy.depute} key={deputy._id}/>)}
      </View>
      );
  }
}


export default createContainer(params=>{
  Meteor.subscribe('deputies');

  return{
    deputies: Meteor.collection('deputies').find(),
};
},Deputies_List);


