import React , {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import DeputyDetail from './deputy_detail';
import Deputies from '../../politicsmeteor/collections/deputies'



class Deputies_List extends Component{

  render(){
    const {deputies}= this.props;

    return(

      <View>

      <Text>Testing</Text>
           {this.props.deputies.map(deputy=><DeputyDetail deputy={deputy} key={deputy._id}/>)}

      </View>
      );
  }
}


export default createContainer(params=>{
  Meteor.subscribe('deputies');
  return{
    deputies: Meteor.collection('deputies').find({}),
};
},Deputies_List);


