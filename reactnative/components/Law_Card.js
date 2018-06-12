import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Image,
  WebView,
  Linking,
  ListView,
  Switch
} from "react-native";
import Meteor, { createContainer, MeteorListView } from "react-native-meteor";
import {
  List,
  ListItem,
  Card,
  SocialIcon,
  Button
} from "react-native-elements";
import LawDetail from "./Law_Detail";

//this component renders the full law description : users can vote here

class LawCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserVote: "Pas de Vote",
      SwitchIsOn: false
    };
  }

  //CallBack for Switch Button
  onSwitchChange(_id) {
    const { SwitchIsOn } = this.state;
    switch (this.state.SwitchIsOn) {
      case false:
        return (
          <TouchableHighlight onClick={this._OnAgree(_id)}>
            {this.setState({ SwitchIsOn: true })}
          </TouchableHighlight>
        );
      case true:
        return (
          <TouchableHighlight onClick={this._OnDisagree(_id)}>
            {this.setState({ SwitchIsOn: false })}
          </TouchableHighlight>
        );
    }
  }

  updateLaw = (loi, newValue) => {
    let votes = Meteor.user().profile.votes;

    if (!votes) {
      votes = [{ [loi]: newValue }];
    } else {
      //filter votes so that it excludes the vote that includes the loi (lawId)
      const filteredVotes = votes.filter(vote => {
        return !Object.keys(vote).includes(loi);
      });
      votes = [...filteredVotes, { [loi]: newValue }];
    }

    //Save the vote in the user's profile
    Meteor.call(newValue === "oui" ? "_OnAgree" : "_OnDisagree", votes);

    const existingVote = Meteor.user().profile.votes.find(
      vote => Object.keys(vote)[0] === loi
    );

    const existingVoteValue = existingVote && existingVote[loi];

    Meteor.call("updateVotes", loi, newValue, existingVoteValue);
  };

  render() {
    const { title, abstract, _id, image } = this.props.navigation.state.params;

    const navigation = this.props.navigation;
    //console.log(this.state.UserVote);
    return (
      <Card image={{ uri: image }}>
        <View
          style={{ flexDirection: "column", justifyContent: "space-around" }}
        >
          <Text
            style={{
              marginBottom: 10,
              fontWeight: "bold",
              fontSize: 30
            }}
          >
            {title}
          </Text>
          <Text style={{ marginBottom: 10 }}>{abstract}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          {/* <Switch
            onValueChange={value => this.onSwitchChange(_id)}
            value={this.state.SwitchIsOn}
            ontintColor="#FF0000"
          /> */}
          <Button
            backgroundColor="#008000"
            title="POUR"
            onPress={() => this.updateLaw(_id, "oui")}
          />
          <Button
            backgroundColor="#FF0000"
            title="CONTRE"
            onPress={() => this.updateLaw(_id, "non")}
          />
        </View>
      </Card>
    );
  }
}

export default createContainer(params => {
  Meteor.subscribe("laws");
  return {
    laws: Meteor.collection("laws").find({})
  };
}, LawCard);
