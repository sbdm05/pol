import React , {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import DeputyDetail from './deputy_detail';




class Deputies_List extends Component{

  render(){
    const {deputies}= this.props;

    return(

      <View>
      <Text>testing</Text>

           {this.props.deputies.map(deputy=><DeputyDetail deputy={deputy.depute} key={deputy._id}/>)}

      </View>
      );
  }
}


export default createContainer(params=>{
  const handle = Meteor.subscribe('deputies');
  Meteor.subscribe('deputies');

  return{
    deputies: handle.ready(),
    deputies: Meteor.collection('deputies').find({}),
  };
},Deputies_List)


