import React, { Component } from "react";
import { Laws } from "../../../imports/collections/laws";
import { Meteor } from "meteor/meteor";
import { createContainer } from "meteor/react-meteor-data";

var uploader = new ReactiveVar();

class LawEditor extends Component {
  constructor(props) {
    super(props);
    const { law } = props;
    this.state = {
      titre: law.title || this.defaultState.titre,
      abstract: law.abstract || this.defaultState.abstract,
      image: law.image || this.defaultState.image
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.law._id !== this.props.law._id) {
      this.setState(this.defaultState);
    }
  }

  defaultState = {
    titre: "Votre titre ici",
    abstract: "abstract ici",
    image:
      "https://s3.eu-west-3.amazonaws.com/appolitique/images/1527586384012-Twitter-icon.png"
  };

  uploadFile = file => {
    const lawId = this.props.law._id;

    //Store the LawId into metaContext & send to AmazonS3
    var metaContext = { lawId };
    var upload = new Slingshot.Upload("LawPic", metaContext);
    //render this conditional

    upload.send(file, function(error, downloadUrl) {
      if (error) {
        alert(error);
      } else {
        Meteor.call("laws_image.update", lawId, downloadUrl);
      }
    });
  };

  //Update Fields in the db + update state
  handleSubmit(e, props) {
    e.preventDefault();

    //Access the law Object
    const lawId = this.props.law._id;

    const file = document.getElementById("uploadFile").files[0];

    if (file) {
      this.uploadFile(file);
    }

    const { titre, abstract } = this.state;
    if (titre) {
      Meteor.call("laws.update", lawId, titre, abstract);
    }
  }

  //Take the new value and displays it
  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Titre</label>
        <input
          className="form-control"
          type="text"
          name="titleLoi"
          value={this.state.titre}
          onChange={e => this.handleChange("titre", e.target.value)}
        />
        <label>Description</label>
        <input
          className="form-control"
          type="text"
          name="abstractLoi"
          value={this.state.abstract}
          onChange={e => this.handleChange("abstract", e.target.value)}
        />

        <img src={this.state.image} />
        <input
          type="file"
          className="uploadFile"
          id="uploadFile"
          onChange={this.handleChange}
        />

        <button className="btn btn-primary">
          Enregistrer le titre et l'abstract
        </button>
      </form>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe("laws");
  return { laws: Laws.find({}).fetch() };
}, LawEditor);
