import React , {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';


const DeputyDetail =({deputy})=>{

  const{nom} = deputy;

  return(
    <Text>Nom : {nom}</Text>
    );

}


export default DeputyDetail;


