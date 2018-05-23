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
      UserVote: "Pas de Vote"
    };
  }

  async _OnAgree(_id) {
    //set New State
    await this.setState({ UserVote: "oui" });
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
    Meteor.call("_OnAgree", votes);
    console.log("last consolelog", votes);
  }

  async _OnDisagree(_id) {
    //set New State
    await this.setState({ UserVote: "non" });
    //Extract Info
    const loi = _id;
    const choix = this.state.UserVote;
    let votes = Meteor.userId().votes;
    console.log(loi, votes);

    if (!votes) {
      //console.log("from !votes", votes, choix);
      votes = [{ [loi]: choix }];
    } else {
      //console.log("from else");
      const filteredVotes = votes.filter(vote => {
        return !Object.keys(vote).includes(loi);
      });
      votes = [...filteredVotes, { [loi]: choix }];
      //console.log("votes", votes);
    }
    Meteor.call("_OnDisagree", votes, [loi]);
    //console.log("last consolelog", votes, [loi]);
  }

  render() {
    const { title, abstract, _id } = this.props.navigation.state.params;

    const navigation = this.props.navigation;
    //console.log(this.state.UserVote);
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
            <Button title="Yes" onPress={() => this._OnAgree(_id)} />
            <Button title="No" onPress={() => this._OnDisagree(_id)} />
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

// Should I create a publication for votes array ?
// Can I have multiple subscription within one createContainer ?
// Tried to create and pub UserVotes + sub but does not render
// How to store votes so it's "easy" to retrieve the title
//=> right now, only saving the _id into User Collection: better embedded doc ?
