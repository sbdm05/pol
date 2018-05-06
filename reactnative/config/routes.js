import React, { Component } from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";
import Deputies_List from "../components/deputies_list";
import DeputyDetail from "../components/deputy_detail";
import DeputyProfile from "../components/deputy_profile";
import Spinner from "../components/spinner";
import authUser from "../components/authUser";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import CircoFinder from "../components/CircoFinder";
import Flat_List from "../components/FlatList";
import DeputyVoteList from "../components/DeputyVoteList";

class StackComponent extends Component {
  render() {
    const MainStack = StackNavigator(
      {
        //Auth: {screen: authUser, navigationOptions: {title: 'Login ou SignUp'}},
        SignIn: { screen: SignIn, navigationOptions: { title: "SignIn" } },
        SignOut: { screen: SignOut, navigationOptions: { title: "SignOut" } },
        Home: {
          screen: Flat_List,
          navigationOptions: { title: "Choisissez votre député" }
        },
        DeputyProfile: {
          screen: DeputyProfile,
          navigationOptions: { title: "Deputy Profile" }
        },
        Spinner: {
          screen: Spinner,
          navigationOptions: { title: "My Profile" }
        },
        FindCirco: {
          screen: CircoFinder,
          navigationOptions: { title: "Quelle est votre circonscription ?" }
        },
        AuthScreen: {
          screen: authUser,
          navigationOptions: { title: "Welcome" }
        },
        DeputyVoteList: {
          screen: DeputyVoteList,
          navigationOptions: { title: "liste des votes" }
        }
      },
      {
        initialRouteName: "Home"
      }
    );

    return <MainStack />;
  }
}

export default StackComponent;
