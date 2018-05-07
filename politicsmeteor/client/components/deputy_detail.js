import React, { Component } from "react";
import Toggle from "material-ui/Toggle";
import FlatButton from "material-ui/FlatButton";
import { Deputies } from "../../imports/collections/deputies";

const styles = {
  block: {
    maxWidth: 250
  },
  toggle: {
    marginBottom: 16
  },
  thumbOff: {
    backgroundColor: "#ffcccc"
  },
  trackOff: {
    backgroundColor: "#ff9d9d"
  },
  thumbSwitched: {
    backgroundColor: "red"
  },
  trackSwitched: {
    backgroundColor: "#ff9d9d"
  },
  labelStyle: {
    color: "red"
  }
};

class DeputyDetail extends Component {
  constructor(props) {
    super();
    this.state = {
      isToggled: false,
      NoToggled: false,
      HasNotVoted: false,
      votes_value: "non"
    };
  }

  // When the deputy voted yes
  async onToggled() {
    //Define the state
    const { votes_value, isToggled } = this.state;
    //Set new states
    await this.setState(
      {
        isToggled: true,
        NoToggled: false,
        HasNotVoted: false,
        votes_value: "oui"
      },
      () => console.log(this.state.votes_value, "fromontoggled")
    );

    //meteor.call pour insert a new field
    //console.log(this.props.law._id, 'ID de la loi') //return the lawId
    //console.log(this.props.deputy._id, 'ID du député')//return the deputy
    const depute = this.props.deputy._id;
    const loi = this.props.law._id;
    const choix = this.state.votes_value; //yes or no
    let votes = this.props.deputy.depute.votes;

    if (!votes) {
      votes = [{ [loi]: choix }];
    } else {
      const filteredVotes = votes.filter(vote => {
        //console.log(vote);
        //console.log(Object.keys(vote).includes(loi))
        return !Object.keys(vote).includes(loi);
      });
      //...destructuring=> to check
      votes = [...filteredVotes, { [loi]: choix }];
    }
    Meteor.call("setVote", depute, votes);
  }

  // When the deputy voted no
  async NoToggled() {
    //Define the state
    const { votes_value, isToggled } = this.state;
    //Set new states
    await this.setState(
      {
        NoToggled: true,
        isToggled: false,
        HasNotVoted: false,
        votes_value: "non"
      },
      () => console.log(this.state.votes_value, "fromNoToggled")
    );

    //meteor.call pour insert a new field
    //console.log(this.props.law._id, 'ID de la loi') //return the lawId
    //console.log(this.props.deputy._id, 'ID du député')//return the deputy
    const depute = this.props.deputy._id;
    const loi = this.props.law._id;
    const choix = this.state.votes_value; //yes or no
    let votes = this.props.deputy.depute.votes;

    if (!votes) {
      votes = [{ [loi]: choix }];
    } else {
      const filteredVotes = votes.filter(vote => {
        //console.log(vote);
        //console.log(Object.keys(vote).includes(loi))
        return !Object.keys(vote).includes(loi);
      });
      //...destructuring=> to check
      votes = [...filteredVotes, { [loi]: choix }];
    }
    Meteor.call("VoteNo", depute, votes);
  }

  // When the deputy has not voted (absent or refuse to vote)
  async HasNotVoted() {
    //Define the state
    const { votes_value, isToggled } = this.state;
    //Set new states
    await this.setState(
      {
        NoToggled: false,
        isToggled: false,
        HasNotVoted: true,
        votes_value: "N'a pas voté"
      },
      () => console.log(this.state.votes_value, "fromHasNotVoted")
    );

    //meteor.call pour insert a new field
    //console.log(this.props.law._id, 'ID de la loi') //return the lawId
    //console.log(this.props.deputy._id, 'ID du député')//return the deputy
    const depute = this.props.deputy._id;
    const loi = this.props.law._id;
    const choix = this.state.votes_value; //yes or no
    let votes = this.props.deputy.depute.votes;

    if (!votes) {
      votes = [{ [loi]: choix }];
    } else {
      const filteredVotes = votes.filter(vote => {
        //console.log(vote);
        //console.log(Object.keys(vote).includes(loi))
        return !Object.keys(vote).includes(loi);
      });
      //...destructuring=> to check
      votes = [...filteredVotes, { [loi]: choix }];
    }
    Meteor.call("HasNotVoted", depute, votes);
  }

  render() {
    const { votes_value, isToggled } = this.state;
    //console.log(this.props.law, 'from rebder', votes_value)
    return (
      <div className="thumbnail">
        <div className="caption">
          <h3>{this.props.deputy.depute.nom}</h3>
          <ul className="list-group">
            <li className="list-group-item">
              Parti: {this.props.deputy.depute.groupe_sigle}
            </li>
          </ul>
        </div>
        <div style={styles.block}>
          <Toggle
            label="OUI"
            style={styles.toggle}
            toggled={this.state.isToggled}
            onToggle={() => this.onToggled(this.props.law)} //needs to be an arrow function or it will fire automatically
          />
        </div>
        <div style={styles.block}>
          <Toggle
            label="NON"
            style={styles.toggle}
            toggled={this.state.NoToggled}
            onToggle={() => this.NoToggled(this.props.law)} //needs to be an arrow function or it will fire automatically
          />
        </div>
        <div style={styles.block}>
          <Toggle
            label="N'a pas voté"
            style={styles.toggle}
            toggled={this.state.HasNotVoted}
            onToggle={() => this.HasNotVoted(this.props.law)} //needs to be an arrow function or it will fire automatically
          />
        </div>
      </div>
    );
  }
}

export default DeputyDetail;
