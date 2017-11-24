import React , {Component}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meteor, {createContainer, MeteorListView} from 'react-native-meteor';
import DeputyDetail from './deputy_detail';




class Deputies_List extends Component{

  render(){
        const {deputies}= this.props; // the list is here
    console.log(deputies, "thelist")

    return(

      <View>

      <Text>Testing</Text>
           {this.props.deputies.map(deputy=><DeputyDetail deputy={deputy.depute} key={deputy._id}/>)}

      </View>
      );
  }
}


export default createContainer(params=>{
  Meteor.subscribe('deputies');
  console.log(Meteor.collection('invalidtest').find(), "do you still have this log?") // test
  return{
    deputies: Meteor.collection('deputies').find(),//ok
};
},Deputies_List);


