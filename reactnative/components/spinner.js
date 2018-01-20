import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import {connect} from 'react-redux';
import Meteor, {createContainer} from 'react-native-meteor';
import DeputyProfile from './deputy_profile';


class Spinner extends Component {
    constructor(props){
      super(props);
    }

  render() {
    //const {nom, groupe_sigle, nom_circo, picture, num_circo} = this.props.navigation.state.params;
    //const navigation = this.props.navigation;
    //console.log ({props.navigation})

      return (
        <View>
          <Text>test</Text>
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

export default Spinner;
