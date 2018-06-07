import React, { Component } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { connect } from "react-redux";
import Meteor, { createContainer } from "react-native-meteor";
import DeputyProfile from "./deputy_profile";
import UserVotes from "./UserVotes";
import {
  List,
  ListItem,
  Card,
  SocialIcon,
  Button
} from "react-native-elements";
//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { nom, groupe_sigle, nom_circo, picture, num_circo, id } =
      this.props.navigation.state.params || {};

    //This update into the component
    const number = Meteor.user() && Meteor.user().profile.selectedDeputy;
    const user_email = Meteor.user() && Meteor.user().emails[0].address;
    //This does not update into the component
    const depute =
      this.props.selectedDeputy && this.props.selectedDeputy.depute;

    return (
      <View>
        <Card title="MES INFOS">
          <Text>Votre e-mail : {user_email}</Text>
          <Text>Votre député est {depute && depute.nom}</Text>
          <Text>
            Votre député fait partie de : {depute && depute.groupe_sigle}{" "}
          </Text>
        </Card>
        <UserVotes />
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "blue"
  }
};

export default createContainer(params => {
  Meteor.subscribe("selectedDeputy");
  return {
    selectedDeputy:
      Meteor.user() &&
      Meteor.collection("deputies").findOne({
        "depute.id": Meteor.user().profile.selectedDeputy
      })
  };
}, UserProfile);
