
import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
import { List, ListItem, Icon, Card, Divider, Button} from 'react-native-elements';


const DeputyDetail =({deputy})=>{


  const{nom, groupe_sigle} = deputy;



  return(

        <ListItem
            title={nom}
            subtitle={groupe_sigle}
            containerStyle={{ borderBottomWidth: 0.5 }}
          />

    );
  }

export default DeputyDetail;


