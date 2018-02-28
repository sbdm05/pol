import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data'; 
import {Laws} from '../../../imports/collections/laws'; 
import LawEditor from './laws_editor'; 

class LawsMain extends Component{
    render(){
        //console.log(this.props.params.lawId). This is passed from laws_list
        //console.log(this.props.law)
        // Here we pass the props coming from createContainer to laweditor component
        return(
            <div>
                <LawEditor law={this.props.law}/>
            </div>
        );
    }
}

export default createContainer((props) => {
    const {lawId} = props.params;
    Meteor.subscribe('laws');
        return {law: Laws.findOne(lawId)};
}, LawsMain); 
  