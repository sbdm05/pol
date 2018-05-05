import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from "react-native";
import Meteor, { createContainer } from "react-native-meteor";
import {
  List,
  ListItem,
  Icon,
  Card,
  Divider,
  Button
} from "react-native-elements";
import DeputyVoteList from "./DeputyVoteList";
import { StackNavigator, TabNavigator } from "react-navigation";

//this component render one particular row in the list

class DeputyVoteDetail extends Component {
  render() {
    //console.log(this.props.voteDeputy, 'from DeputyVoteDetail');
    const navigation = this.props.navigation;

    return <Text>From Test</Text>;
  }
}
export default DeputyVoteDetail;
