import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import Meteor, { connectMeteor } from 'react-native-meteor';
import SignIn from './SignIn';
import SignOut from './SignOut';



class authUser extends Component{

  constructor(props){
    super(props);
    this.data={};
  }

  getMeteorData() {
    console.log(this.data.user)
    return {
      user: Meteor.user(),
    };
  }

  render(){

     if (this.data.user){
      return <SignOut/>
     }

     return <SignIn />;

  }

}

export default authUser;
