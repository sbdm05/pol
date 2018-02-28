import React, {Component} from 'react'; 
import {Laws} from '../../../imports/collections/laws';
//import { Meteor } from 'meteor/meteor';

class LawEditor extends Component{

    handleSubmit(e){
        e.preventDefault();
        const titleLoi=e.target.titleLoi.value;
        const abstractLoi=e.target.abstractLoi.value;
        if(titleLoi){
            //e.target.titleLoi.value='';
            //e.target.abstractLoi.value='';
            Meteor.call('laws.update', titleLoi, abstractLoi); 
        }
    };


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
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