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
  ListView
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
      UserVote: "non"
    };
  }

  _OnAgree = _id => {
    //set New State
    this.setState({ UserVote: "oui" });
    //Extract Info
    const loi = _id;
    const choix = this.state.UserVote;
    let votes = Meteor.userId().votes;
    console.log(loi, votes);

    if (!votes) {
      console.log("from !votes", votes);
      votes = [{ [loi]: choix }];
    } else {
      console.log("from else");
      const filteredVotes = votes.filter(vote => {
        return !Object.keys(vote).includes(loi);
      });
      votes = [...filteredVotes, { [loi]: choix }];
      console.log("votes", votes);
    }
    Meteor.call("_OnAgree", votes);
  };

  _OnDisagree = _id => {
    this.setState({ UserVote: "non" });
    //console.log(this.state.UserVote);
    //console.log("from _OnDisagree", _id);
    Meteor.call("_OnDisagree", _id);
  };

  render() {
    const { title, abstract, _id } = this.props.navigation.state.params;

    const navigation = this.props.navigation;
    //console.log(this.state.agree);
    return (
      <View>
        <Card>
          <View
            style={{ flexDirection: "column", justifyContent: "space-around" }}
          >
            <Text>{title}</Text>
            <Text>{abstract}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button title="D'accord" onPress={() => this._OnAgree(_id)} />
            <Button title="Pas D'accord" />
          </View>
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
}, LawCard);
