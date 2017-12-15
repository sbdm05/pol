import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableHighlight, Image } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import { List, ListItem, Card} from 'react-native-elements';
import DeputyDetail from './deputy_detail';
import Tabs from '../config/routes.js';
import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

//this component renders the full deputy profile

class DeputyProfile extends Component {

    constructor(props){
      super(props);
    }


    render(){

        const{nom, emails, picture, url_an, groupe_sigle, profession, nom_circo} = this.props.navigation.state.params;

        return(
          <View>
              <Card>
                <Image
                style={{width: 50, height: 60}}
                source={{uri: picture }}
                />
                <Text>{nom}</Text>
                <Text>{groupe_sigle}</Text>
                <Text>Circonscription : {nom_circo}</Text>
                <Text>Profession : {profession}</Text>
                <Text>{emails[0].email}</Text>
              </Card>
            </View>

          );
    }

}

export default DeputyProfile;
