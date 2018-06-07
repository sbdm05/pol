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

  async _OnAgree(_id) {
    //set New State
    await this.setState({ UserVote: "oui" });
    //Extract Info
    const loi = _id;
    const choix = this.state.UserVote;
    let votes = Meteor.user().profile.votes;

    //console.log(loi, votes, "loi et votes");
    //console.log(Object.values(votes), "object values");

    if (!votes) {
      //console.log("from !votes", votes, choix);
      votes = [{ [loi]: choix }];
    } else {
      //filter votes so that it excludes the vote that includes the loi (lawId)
      const filteredVotes = votes.filter(vote => {
        return !Object.keys(vote).includes(loi);
      });
      votes = [...filteredVotes, { [loi]: choix }];

      //Filter to only retrieve the law object that matches
      const thelawId = votes.filter(vote => {
        return Object.keys(vote).includes(loi);
      });

      const value = thelawId.loi;

      console.log(value, "test");
    }
    //Save the vote in the user's profile
    Meteor.call("_OnAgree", votes);
    //Increment vote_yes by 1 in the law object
    Meteor.call("vote_agree", loi);
    console.log("choix", choix);
    //console.log(Object.values(votes), "votes");
  }

  async _OnDisagree(_id) {
    //set New State
    await this.setState({ UserVote: "non" });
    //Extract Info
    const loi = _id;
    const choix = this.state.UserVote;
    let votes = Meteor.user().profile.votes; // 1 ) does not return the votes, how to access the field ?
    console.log(loi, votes, "loi et votes");

    if (!votes) {
      console.log("from !votes", votes, choix);
      votes = [{ [loi]: choix }];
    } else {
      //console.log("from else");
      const filteredVotes = votes.filter(vote => {
        return !Object.keys(vote).includes(loi);
      });
      votes = [...filteredVotes, { [loi]: choix }];
      //console.log("votes", votes);
    }
    //Save the vote in the user's profile
    Meteor.call("_OnDisagree", votes);
    //Increment vote_no by 1
    Meteor.call("vote_disagree", loi);
    console.log("value de la loi", choix);
  }

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
            onPress={() => this._OnAgree(_id)}
          />
          <Button
            backgroundColor="#FF0000"
            title="CONTRE"
            onPress={() => this._OnDisagree(_id)}
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
