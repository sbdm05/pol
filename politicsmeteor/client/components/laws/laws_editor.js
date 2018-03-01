import React, {Component} from 'react'; 
import {Laws} from '../../../imports/collections/laws';
//import { Meteor } from 'meteor/meteor';

class LawEditor extends Component{
    
    handleSubmit(e, props){
        console.log(this.props, 'from handle submit')
        e.preventDefault();
        
        const lawId= (this.props.law);
        console.log(lawId, 'should be lawId')
       
        const titleLoi=e.target.titleLoi.value;
        const abstractLoi=e.target.abstractLoi.value;
        if(titleLoi){
            //e.target.titleLoi.value='';
            //e.target.abstractLoi.value='';
            Meteor.call('laws.update',lawId, titleLoi, abstractLoi); 
        }
    };

    render(){
        console.log(this.props.law, 'from render')
        return(
            <form onSubmit={this.handleSubmit.bind(this)} >
                <label>Titre</label>
                <input className="form-control" 
                type="text"
                ref="title"
                name="titleLoi"/>

                <label>Description</label>
                <input className="form-control"
                type="text"
                ref="abstract"
                name="abstractLoi"/>

                <button className="btn btn-primary">Enregistrer</button>
            </form>


        );
    }
}

export default LawEditor; 