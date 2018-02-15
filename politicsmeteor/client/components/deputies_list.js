import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import Deputies from'./imports/collections/deputies';

const DeputyList = (props) =>{
  //props.deputies=> an array of deputies object
  console.log('tes')
  return(
    <div>
      <div className="deputy-list">
        From Deputy List
      </div>
    </div>
    );
};

export default createContainer(()=>{
  //1Set up subscription
  Meteor.subscribe('deputies');
  //Return an object as props. Whatever we return will be sent to EmployeeList
  //key is deputies
  return{deputies: Deputies.find({}).fetch()};
}, DeputyList);

