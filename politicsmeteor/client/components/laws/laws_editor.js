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

  //Update Fields in the db + update state
  handleSubmit(e, props) {
    e.preventDefault();
    //Access the law Object
    const lawId = this.props.law;
    //Store the LawId into metaContext & send to AmazonS3
    var metaContext = { lawId: lawId._id };
    var upload = new Slingshot.Upload("LawPic", metaContext);
    //render this conditional
    console.log(upload, "upload");
    upload.send(document.getElementById("uploadFile").files[0], function(
      error,
      downloadUrl
    ) {
      uploader.set();

      if (error) {
        alert(error);
      } else {
        console.log("Success!");
        console.log("uploaded file available here: " + downloadUrl);

        Meteor.call(
          "laws_image.update",
          lawId,
          titleLoi,
          abstractLoi,
          downloadUrl
        );
      }
      uploader.set(upload);
    });

    //laws.update is not called
    const titleLoi = e.target.titleLoi.value;
    const abstractLoi = e.target.abstractLoi.value;
    if (titleLoi) {
      Meteor.call("laws.update", lawId, titleLoi, abstractLoi, downloadUrl);

      this.setState({
        titre: titleLoi,
        abstract: abstractLoi,
        image:
          "https://s3.eu-west-3.amazonaws.com/appolitique/images/1527586384012-Twitter-icon.png"
      });
    }
  }

  //Take the new value and displays it
  handleChange(e, props, value, input) {
    this.setState({
      titre: input.value,
      abstract: input.value,
      image: downloadUrl
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Titre</label>
        <input
          className="form-control"
          type="text"
          name="titleLoi"
          value={this.state.titre}
          onChange={this.handleChange.bind(this)}
        />
        <label>Description</label>
        <input
          className="form-control"
          type="text"
          name="abstractLoi"
          value={this.state.abstract}
          onChange={this.handleChange.bind(this)}
        />
        <label>Points positifs</label>
        <input
          className="form-control"
          type="text"
          name="abstractLoi"
          value={this.state.abstract}
          onChange={this.handleChange.bind(this)}
        />
        <label>Points négatifs</label>
        <input
          className="form-control"
          type="text"
          name="abstractLoi"
          value={this.state.abstract}
          onChange={this.handleChange.bind(this)}
        />

        <img src={this.state.image} />
        <input
          type="file"
          className="uploadFile"
          id="uploadFile"
          onChange={this.handleChange.bind(this)}
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
