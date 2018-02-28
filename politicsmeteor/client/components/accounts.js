import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';
//Blaze is a library that can render templates provided by Meteor


class Accounts extends Component{
  //called onetime after component is rendered
  //render the Blaze accounts form then find the div
  //we just rendered in the 'render' method and place
  //the Blaze account form in that div
  componentDidMount(){
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }

  //called when our component is about to be remove
  //Go find the forms we created and destroy them
  //We need to clean up those forms ourselves
  componentWillUnmount(){
    Blaze.remove(this.view);
  }


  render(){
    return(
      <div ref="container"></div>
      );
  }
}

export default Accounts;
