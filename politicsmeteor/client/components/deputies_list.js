import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import { Deputies } from'/imports/collections/deputies';
import DeputyDetail from './deputy_detail';

const PER_PAGE = 20;

class DeputyList extends Component{
  constructor(props){
    super();
  }

  componentWillMount(){
    this.page=1;
  }

  handleButtonClick(){
    Meteor.subscribe('deputies_20', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render(){
  //props.deputies=> an array of deputies object
  //console.log(this.props.law, 'from deputy list')
      return(
        <div>
          <div className="deputy-list">
            {this.props.deputies.map(deputy=> <DeputyDetail {...this.props} key={deputy._id} deputy={deputy} />)}
          </div>
          <button onClick={this.handleButtonClick.bind(this)}
            className="btn btn-primary">
            Load More...
          </button>
        </div>
        );
  }
};

export default createContainer(()=>{
  //Set up subscription
  Meteor.subscribe('deputies_20', PER_PAGE);
  //Return an object as props. Whatever we return will be sent to EmployeeList
  //key is deputies
  return{deputies: Deputies.find({}).fetch()};
}, DeputyList);

