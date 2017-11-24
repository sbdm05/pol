import React , {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';


const DeputyDetail =({deputy})=>{

  const{nom, groupe_sigle} = deputy;

  return(
    <Text>Nom : {nom}</Text>
    <Text>Parti : {groupe_sigle}</Text>
    );

}


export default DeputyDetail;


