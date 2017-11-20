import React , {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor, {createContainer} from 'react-native-meteor';
import DeputyDetail from './deputy_detail';

class Deputies_List extends Component{

  render(){

    const {deputies}= this.props;

    return(

      <View>
          {this.props.deputies.map(deputy=><DeputyDetail deputy={deputy} key={deputy._id}/>)}
      </View>

      );
  }
}


export default createContainer(params=>{

  return{
    deputies: Meteor.collection('deputies').find({}),

  };

},Deputies_List)
