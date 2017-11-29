import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import DeputyProfile from './deputy_profile';
import Tabs from '../config/routes.js';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';



class Deputies_List extends Component{

   static navigationOptions = {
    title: 'Review Jobs',
    tabBar: {
      icon: ({ tintColor }) => {
        return <Icon name="favorite" size={30} color={tintColor} />;
      }
    },
    header: ({ navigate }) => {
      return {
        right: (
          <Button
            title="Settings"
            onPress={() => navigate('Spinner')}
            backgroundColor="rgba(0,0,0,0)"
            color="rgba(0, 122, 255, 1)"
          />
        ),
        style: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }
      };
    }
  }


  _onPressDeputy(){
    console.log(this.props.deputies)
  }


   render(){
    const {deputies}= this.props; // the list is here
    const { navigate } = this.props.navigation;


    return(

        <View style={{flex: 1}}>
          <TouchableHighlight  onPress = {this._onPressDeputy} >
              <ScrollView>
                {this.props.deputies.map(deputy=><DeputyDetail deputy={deputy.depute} key={deputy._id}/>)}
              </ScrollView>
          </TouchableHighlight>
        </View>


    );
  }
}


export default createContainer(params=>{
  Meteor.subscribe('deputies');

  return{
    deputies: Meteor.collection('deputies').find(),
};
},Deputies_List);

