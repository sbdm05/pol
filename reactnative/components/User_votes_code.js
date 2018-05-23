import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { connect } from "react-redux";
import Meteor, { createContainer } from "react-native-meteor";
import DeputyProfile from "./deputy_profile";
import {
  List,
  ListItem,
  Card,
  SocialIcon,
  Button
} from "react-native-elements";
//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';

class UserVotes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.votes, "votes of the user");
    const {
      votes: { laws }
    } = this.props;

    return (
      <View>
        <Card title="MES VOTES">
          {laws.map(law =>
            Object.keys(law).map(key => (
              <Text>
                {key}: {law[key]}
              </Text>
            ))
          )}
        </Card>
      </View>
    );
  }
}

export default createContainer(params => {
  Meteor.subscribe("UserVotes");
  //console.log(Meteor.collection("users").find(this.userId));

  const { laws } = Meteor.collection("users").findOne(
    this.userId
  ).profile.votes;
  const titles = laws.map(law =>
    Object.keys(law).map(key => {
      return Meteor.collection("laws").findOne({ _id: key }).title;
    })
  );

  console.log(titles);

  return {
    votes: Meteor.collection("users").findOne(this.userId).profile.votes
  };
}, UserVotes);
