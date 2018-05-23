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

class StackComponentForLaws extends Component {
  render() {
    const SecondaryStack = StackNavigator(
      {
        //opens list of stack
        LawsList: {
          screen: Laws_List,
          navigationOptions: { title: "Les lois" }
        },
        LawCard: {
          screen: LawCard,
          navigationOptions: { title: "Détail de la loi" }
        }
      }, //closes list of stack
      {
        initialRouteName: "LawsList"
      }
    );

    return <SecondaryStack />;
  } //closes render
} //closes StackComponentForLaws

export default StackComponentForLaws;
