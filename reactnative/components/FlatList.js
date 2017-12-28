import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight, WebView } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import DeputyProfile from './deputy_profile';
import SearchBar from 'react-native-searchbar';
import CircoFinder from './CircoFinder';

//This component renders the full list of deputies

class Flat_List extends Component{

  constructor(props){
    super(props);
    this._handleResults = this._handleResults.bind(this);
    this._handleSearch = this._handleSearch.bind(this);
    this.state = {
      data : [] // initiate state
    }
  }

  _handleResults(results){
    console.log('handle results')
    this.setState({data: results})
  }

  _handleSearch(input){
    // if any of nom, nom_circo or num_circo includes the search , return it//ok
    const filteredData = (this.props.deputies || []).filter(({
      depute: {
        nom,
        nom_circo,
        num_circo,
      }
    }) =>
      nom.includes(input) ||
      nom_circo.includes(input) ||
      num_circo.toString().includes(input)
    )

    this.setState({data : filteredData})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({data: nextProps.deputies})
  }

   render() {
    let listitems = this.state.data

    return(
    <View>

      <SearchBar
        ref={(ref) => this.searchBar = ref}
        //data={this.props.deputies}
        handleResults={this._handleResults}
        handleSearch={this._handleSearch}
        allDataOnEmptySearch = {true}
        showOnLoad = {true}
        hideBack
        autoCorrect= {false}
        placeholder="Député ou Circonscription"

      />

      <List>
        <FlatList style={styles.flatListStyle}
          data={listitems}
          keyExtractor={(item)=> item._id}
          renderItem={({item})=>(
             <DeputyDetail deputy={item.depute} navigation={this.props.navigation} /> )} />
      </List>

    </View>
    );
  }
}

const styles={
  flatListStyle:{
    marginTop: 50
  }
}



export default createContainer(params=>{
  Meteor.subscribe('deputies');
  return{
    deputies: Meteor.collection('deputies').find(),
};
},Flat_List);

