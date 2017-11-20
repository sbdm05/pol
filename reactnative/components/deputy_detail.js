import React , {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';



const DeputyDetail =({deputy})=>{

  const{name} = deputy;

  return(
    <Text>Nom : {name}</Text>
    );

}


export default DeputyDetail;
