import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import {createContainer} from 'meteor/react-meteor-data';
import {Laws} from '../../../imports/collections/laws';
import {Link} from 'react-router'; 

class LawsList extends Component {

  onLawRemove(law){
    Meteor.call('laws.remove', law);
  }

  renderList() {
    console.log(this.props);
    
    return this.props.laws.map(law => {
      const url= "/laws/" + law._id;
      const url_votes="/votes/" + law._id;

      return (
        <li className="list-group-item" key={law._id}>
          <Link to={url}>Loi {law._id}</Link>
          <p>{law.title}</p>
          <p>{law.abstract}</p>
          <span className="pull-right">
            <button
              className="btn btn-danger"
              onClick={()=> this.onLawRemove(law)}>
              Effacer
            </button>
          </span>
          <button key={law._id}><Link to={url_votes}>Attribuer les votes</Link></button>
        </li>
      );
    });
  }


  render() {
    return(
      <ul className="list-group">
        {this.renderList()}
      </ul>
      );
  }
}

export default createContainer(() => {
  Meteor.subscribe('laws');
  return {laws: Laws.find({}).fetch()};
}, LawsList)
