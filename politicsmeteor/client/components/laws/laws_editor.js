import React, {Component} from 'react'; 
import {Laws} from '../../../imports/collections/laws';
import {Tracker} from 'meteor/tracker'; 
import { Meteor } from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';


class LawEditor extends Component{
    constructor(props){
        super(props);
        this.state={
            titre: 'Votre titre ici',
            abstract:'abstract ici'
        }
    }

    componentWillMount(props){
        //console.log(this.props.law._id)
            this.setState({
                titre: this.props.law.title,
                abstract: this.props.law.abstract
        });
    };

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
            this.setState({
                titre:titleLoi,
                abstract:abstractLoi
            })
        }
    };

    handleChange(e, props){
        console.log(this.props, 'from handlechange')
        this.setState({
            titre:input.value,
            abstract:input.value
        });
    };


    render(){
        console.log(this.props.law, 'from render')
        return(
            <form onSubmit={this.handleSubmit.bind(this)} >
                <label>Titre</label>
                <input className="form-control" 
                type="text"
                ref="title"
                name="titleLoi"
                value={this.state.titre}
                onChange={this.handleChange.bind(this)}/>

                <label>Description</label>
                <input className="form-control"
                type="text"
                ref="abstract"
                name="abstractLoi"
                value={this.state.abstract}
                onChange={this.handleChange.bind(this)}/>

                <button className="btn btn-primary">Enregistrer</button>
            </form>


        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('laws');
    return {laws: Laws.find({}).fetch()};
  }, LawEditor)