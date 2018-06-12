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
  state = {
    defaultImage:
      "https://s3.eu-west-3.amazonaws.com/appolitique/images/1527586384012-Twitter-icon.png"
  };

  render() {
    const { title, abstract, _id, image, vote_yes, vote_no } = this.props.law;
    const navigation = this.props.navigation;
    const upvotesperc = Math.round(100 * (vote_yes / (vote_yes + vote_no)));
    const downvotesperc = Math.round(100 * (vote_no / (vote_yes + vote_no)));

    return (
      <Card image={{ uri: image || this.state.defaultImage }}>
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
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text style={{ paddingTop: 7 }}>{upvotesperc}%</Text>
            <Icon type="material-community" name="thumb-up" color="#008000" />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Text style={{ paddingTop: 7 }}>{downvotesperc}%</Text>
            <Icon
              type="material-community"
              name="thumb-down"
              color="#FF0000"
              style={{ paddingTop: 7 }}
            />
          </View>
        </View>
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
