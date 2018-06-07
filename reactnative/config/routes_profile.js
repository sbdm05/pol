import React, { Component } from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";
import Deputies_List from "../components/deputies_list";
import DeputyDetail from "../components/deputy_detail";
import DeputyProfile from "../components/deputy_profile";
import UserProfile from "../components/UserProfile";
import authUser from "../components/authUser";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";
import CircoFinder from "../components/CircoFinder";
import Flat_List from "../components/FlatList";
import DeputyVoteList from "../components/DeputyVoteList";
import Laws_List from "../components/Laws_list";
import LawCard from "../components/Law_Card";
import Test from "../components/test";
import Law_Card from "../components/Law_Card";

class StackComponentForProfile extends Component {
  render() {
    const ProfileStack = StackNavigator(
      {
        //opens list of stack
        UserProfile: {
          screen: UserProfile,
          navigationOptions: { title: "Mon Profil" }
        },
        LawCard: {
          screen: Law_Card,
          navigationOptions: { title: "Détail de la loi" }
        }
      }, //closes list of stack
      {
        initialRouteName: "UserProfile"
      }
    );

    return <ProfileStack />;
  } //closes render
} //closes StackComponentForProfile

export default StackComponentForProfile;
