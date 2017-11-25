import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import Tabs from '../config/routes.js'


class Test extends Component{

  render(){

    return(
      <Text>
        From Test
      </Text>
  );
}

}

export default Test;
