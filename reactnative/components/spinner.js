import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import {connect} from 'react-redux';
import Meteor, {createContainer} from 'react-native-meteor';
import DeputyProfile from './deputy_profile';
//import { Tracker } from 'meteor/tracker';
//import { Mongo } from 'meteor/mongo';


class Spinner extends Component {
    constructor(props){
      super(props);
    }


  render() {
    const {nom, groupe_sigle, nom_circo, picture, num_circo, id} = this.props.navigation.state.params;
    //const navigation = this.props.navigation;
    //console.log ({props.navigation})
    //console.log(Meteor.user().profile.selectedDeputy)


    //This update into the component
    const number= Meteor.user().profile.selectedDeputy;
    const user_email=  Meteor.user().emails[0].address;
    //This does not update into the component
    const depute= this.props.selectedDeputy && this.props.selectedDeputy.depute;

      return (
        <View>
          <Text>Your email is {user_email}</Text>
          <Text>Your deputy is : {depute.nom}</Text>
          <Text>Your deputy group is : {depute.groupe_sigle} </Text>
          <Text>The deputy Id gets updated : {number} </Text>

        </View>
        )

    }
}

const styles={
  spinnerStyle:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  }
}

export default createContainer(params=>{
    Meteor.subscribe('selectedDeputy');
    return{
      selectedDeputy: Meteor.collection('deputies').findOne({"depute.id" : Meteor.user().profile.selectedDeputy}),
    };

},Spinner);



