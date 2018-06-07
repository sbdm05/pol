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
    const { title, abstract, _id, image } = this.props.law;
    const navigation = this.props.navigation;

    return (
      <Card image={{ uri: image }}>
        <Text style={{ marginBottom: 10 }}>{title}</Text>
        <Button
          // icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          onPress={() => navigation.navigate("LawCard", { ...this.props.law })}
          title="JE VOTE"
        />
      </Card>

      // <ListItem
      //   roundAvatar
      //   avatar={{ uri: image }}
      //   title={title}
      //   subtitle={abstract}
      //   containerStyle={{ borderBottomWidth: 0.5 }}
      //   onPress={() => navigation.navigate("LawCard", { ...this.props.law })}
      // />
    );
  }
}
export default LawDetail;
