import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import Tabs from '../config/routes.js';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';



class DeputyProfile extends Component {

    constructor(props){
      super(props);
    }


    render(){
    const {nom, groupe_sigle, email} = this.props.navigation.state.params;
        return(
          <View>
              <Card>
                <Text>{nom}, {email}</Text>
              </Card>
            </View>

          );
    }

}

export default DeputyProfile;
