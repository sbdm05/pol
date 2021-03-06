import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";
import { Laws } from "../../../imports/collections/laws";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LawsMain from "./laws_main";
import VotesMain from "../votes/votesMain";

class LawsList extends Component {
  constructor(props) {
    super(props);
  }
  onLawRemove(law) {
    Meteor.call("laws.remove", law);
  }

  onChangeStatusVote(law, voted) {
    //console.log(law, this.props.voted);
    Meteor.call("changeStatusVote", law, !this.props.voted);
  }

  renderList() {
    console.log(this.props.voted, "this.props.voted");

    return this.props.laws.map(law => {
      //does not work anymore
      const url = "/laws/" + law._id;
      const url_votes = "/votes/" + law._id;

      return (
        <Router>
          <li className="list-group-item" key={law._id}>
            <Link to={url}>Loi {law._id}</Link>
            <p>{law.title}</p>
            <p>{law.abstract}</p>
            <p>{law.voted.toString()}</p>
            <button
              onClick={() => this.onChangeStatusVote(law, this.props.voted)}
            >
              {this.props.voted ? "Cacher" : "montrer"}
            </button>
            <span className="pull-right">
              <button
                className="btn btn-danger"
                onClick={() => this.onLawRemove(law)}
              >
                Effacer
              </button>
            </span>
            <button key={law._id}>
              <Link to={url_votes}>Attribuer les votes</Link>
            </button>
          </li>
        </Router>
      );
    });
  }

  render() {
    return <ul className="list-group">{this.renderList()}</ul>;
  }
}

export default createContainer(() => {
  Meteor.subscribe("laws");
  return { laws: Laws.find({}).fetch() };
}, LawsList);
