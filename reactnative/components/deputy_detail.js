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
import DeputyProfile from "./deputy_profile";

import { StackNavigator, TabNavigator } from "react-navigation";

//this component render one particular row in the list

class DeputyDetail extends Component {
  render() {
    const {
      nom,
      groupe_sigle,
      nom_circo,
      picture,
      num_circo
    } = this.props.deputy;
    const navigation = this.props.navigation;

    return (
      <ListItem
        roundAvatar
        avatar={{ uri: picture }}
        title={nom}
        subtitle={nom_circo}
        badge={{ value: num_circo }}
        containerStyle={{ borderBottomWidth: 0.5 }}
        onPress={() =>
          navigation.navigate("DeputyProfile", { ...this.props.deputy })
        }
      />
    );
  }
}
export default DeputyDetail;
