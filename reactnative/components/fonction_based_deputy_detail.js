
import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
import { List, ListItem, Icon, Card, Divider, Button} from 'react-native-elements';
import DeputyProfile from './deputy_profile';

import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';


//this component render one particular row in the list

const DeputyDetail =({deputy, navigation})=>{


  const {nom, groupe_sigle} = deputy;



  return(

        <ListItem
            title={nom}
            subtitle={groupe_sigle}
            containerStyle={{ borderBottomWidth: 0.5 }}
            onPress={()=> navigation.navigate('DeputyProfile', {...deputy})} />
)}
export default DeputyDetail;

dinesh@nanoapps.co
skype: dineshswamy.sleeplessworks
