import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

class Spinner extends Component {


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ActivityIndicator size={'large'} />
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
