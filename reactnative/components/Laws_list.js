import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableHighlight,
  WebView
} from "react-native";
import Meteor, { createContainer, MeteorListView } from "react-native-meteor";
import { List, ListItem } from "react-native-elements";
import LawDetail from "./Law_Detail";
import SearchBar from "react-native-searchbar";
import CircoFinder from "./CircoFinder";

//This component renders the full list of deputies

class Laws_List extends Component {
  constructor(props) {
    super(props);
    this._handleResults = this._handleResults.bind(this);
    //this._handleSearch = this._handleSearch.bind(this);
    this.state = {
      data: [] // initiate state
    };
    console.log(this.props.laws, "this.props.laws");
  }

  _handleResults(results) {
    this.setState({ data: results });
    console.log({ data: results }, "dataresults");
  }

  //   _handleSearch(input) {
  //     // if any of title, abstract includes the search , return it//ok
  //     const filteredData = (this.props.laws || []).filter(({ _id }) => {
  //       console.log(_id);
  //       if (!law) return false;
  //       const { title, abstract } = laws._id;
  //       return title.includes(input) || abstract.includes(input);
  //     });
  //     console.log(filteredData, "filtered data");

  //     this.setState({ data: filteredData });
  //   }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.laws });
  }

  render() {
    let listitems = this.state.data;
    console.log(listitems, "listitems");
    return (
      <View>
        {
          //   <SearchBar
          //     ref={ref => (this.searchBar = ref)}
          //     //data={this.props.laws}
          //     handleResults={this._handleResults}
          //     handleSearch={this._handleSearch}
          //     allDataOnEmptySearch={true}
          //     showOnLoad={true}
          //     hideBack
          //     autoCorrect={false}
          //     placeholder="Lois"
          //   />
        }

        <List>
          <FlatList
            style={styles.flatListStyle}
            data={listitems}
            keyExtractor={item => item._id}
            renderItem={({ item }) => (
              <LawDetail law={item} navigation={this.props.navigation} />
            )}
          />
        </List>
      </View>
    );
  }
}

const styles = {
  flatListStyle: {
    marginTop: 50
  }
};

export default createContainer(params => {
  Meteor.subscribe("laws");
  return {
    laws: Meteor.collection("laws").find()
  };
}, Laws_List);
