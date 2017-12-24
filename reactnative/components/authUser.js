import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import Meteor, { connectMeteor, Accounts } from 'react-native-meteor';
import SignIn from './SignIn';
import SignOut from './SignOut';



class authUser extends Component{

  constructor(props){
    super(props);
    this.data={};
  }

  getMeteorData() {
    return {
      user: Meteor.user(),
    };
  }

  render(){
     if (this.data.user){
      return <SignOut navigation={this.props.navigation}/>
       }
      return <SignIn navigation={this.props.navigation} />;
  }

}

export default authUser;
