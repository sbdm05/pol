import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight, WebView } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import DeputyProfile from './deputy_profile';
import SearchBar from 'react-native-searchbar';
import CircoFinder from './CircoFinder';

//This component renders the full list of deputies

class SearchByCirco extends Component{

  constructor(props){
    super(props);
    console.log(props)
    this._handleResults = this._handleResults.bind(this);
    this.state = {
      data : null
    }
  }

  _handleResults(results){
    console.log('handle results')
    this.setState({data: results})
  }

   render() {
    let listitems = this.state.data
    if (this.state.data == null)  {
      listitems = this.props.deputies
    }
    return(
    <View>

      <SearchBar
        ref={(ref) => this.searchBar = ref}
        data={this.props.deputies}
        handleResults={this._handleResults}
        allDataOnEmptySearch = {true}
        showOnLoad = {true}
        hideBack
        autoCorrect= {false}
      />

      <List>
        <FlatList style={styles.flatListStyle}
          data={listitems}
          keyExtractor={(item)=> item._id}
          renderItem={({item})=>(
             <
            {nom_circo}
            containerStyle={{ borderBottomWidth: 0.5 }}
            />
        >
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
},SearchByCirco);
