
import React , {Component}from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
import { List, ListItem, Icon, Card, Divider, Button} from 'react-native-elements';


const DeputyDetail =({deputy})=>{


  const{nom, groupe_sigle} = deputy;


  return(


        <View>
          <Card>
            <Text>{nom}, {groupe_sigle}</Text>

          </Card>
        </View>


    );
  }

export default DeputyDetail;


