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
import { StackNavigator, TabNavigator } from "react-navigation";
import LawCard from "./Law_Card";
import Test from "./test";

//this component render one particular row in the list

class LawDetail extends Component {
  render() {
    const { title, abstract, _id } = this.props.law;
    const navigation = this.props.navigation;

    return (
      <ListItem
        roundAvatar
        title={title}
        subtitle={abstract}
        containerStyle={{ borderBottomWidth: 0.5 }}
        onPress={() => navigation.navigate("LawCard", { ...this.props.law })}
      />
    );
  }
}
export default LawDetail;
