import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { connect } from "react-redux";
import Meteor, { createContainer } from "react-native-meteor";
import DeputyProfile from "./deputy_profile";
import LawCard from "./Law_Card";
import {
  List,
  ListItem,
  Card,
  SocialIcon,
  Button,
  Badge
} from "react-native-elements";

class UserVotes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //We use that line because Meteor takes some time to load the data, so it won't return an error
    if (!Meteor.user()) return null;
    const { votes } = Meteor.user().profile;
    const navigation = this.props.navigation;

    // Access the key/value
    const arrayOfTitleValue = votes
      ? votes.map(vote => {
          const key = Object.keys(vote)[0];
          const law = this.props.laws.find(({ _id }) => _id === key);
          return {
            title: law && law.title,
            value: vote[key]
          };
        })
      : [];

    return (
      <View>
        <Card title="MES VOTES">
          {arrayOfTitleValue.map(({ title, value }, i) => {
            //console.log(title, value, i, "index");
            return (
              // <Text key={i}>
              //   {title}: {value}
              // </Text>
              <ListItem
                title={title}
                badge={{ value: value }}
                containerStyle={{ borderBottomWidth: 0.5 }}
                onPress={() =>
                  navigation.navigate("LawCard", { ...this.props.laws })
                }
              />
            );
          })}
        </Card>
      </View>
    );
  }
}

export default createContainer(params => {
  Meteor.subscribe("laws");
  return {
    laws: Meteor.collection("laws").find({})
  };
}, UserVotes);
