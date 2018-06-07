// Declare our collection and the methods
import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

Meteor.methods({
  "laws.insert": function(titleLoi, abstractLoi, downloadUrl) {
    return Laws.insert({
      createdAt: new Date(),
      title: titleLoi,
      abstract: abstractLoi,
      category: [],
      ownerId: this.userId,
      image: downloadUrl,
      voted: false
    });
  },

  "laws.update": function(lawId, titleLoi, abstractLoi, downloadUrl) {
    console.log(downloadUrl, "from laws.update");

    return Laws.update(lawId, {
      $set: { title: titleLoi, abstract: abstractLoi, image: downloadUrl }
    });
  },

  "laws_image.update": function(lawId, titleLoi, abstractLoi, downloadUrl) {
    console.log(downloadUrl, "from laws_image.update");

    return Laws.update(lawId, {
      $set: { title: titleLoi, abstract: abstractLoi, image: downloadUrl }
    });
  },

  "laws.remove": function(law) {
    return Laws.remove(law);
  },

  changeStatusVote: function(law, voted) {
    console.log("from change status vote", law, voted);
    //Check if user is logged in
    console.log(voted, "inside voted");
    if (!this.userId) {
      throw new Meteor.Error("not authorized");
    }

    Laws.update(law, {
      $set: { voted }
    });
  },

  //Increment vote_yes by 1 when voters says Yes
  vote_agree: function(loi) {
    console.log("test from vote agree");

    return Laws.update(loi, {
      $inc: { vote_yes: 1 }
    });
  },

  //Increment vote_no by 1 when voters says No
  vote_disagree: function(loi) {
    console.log("test from vote disagree");

    return Laws.update(loi, {
      $inc: { vote_no: 1 }
    });
  },

  //Decrement vote_yes by 1 if user changes his vote from Yes to No
  change_vote_to_disagree: function(loi) {
    console.log("test from vote agree");

    return Laws.update(loi, {
      $inc: { vote_yes: -1 }
    });
  },

  //Decrement vote_no by 1 if user changes his vote from No to YesYes to No
  change_vote_to_agree: function(loi) {
    console.log("test from vote agree");

    return Laws.update(loi, {
      $inc: { vote_no: -1 }
    });
  }
});

export const Laws = new Mongo.Collection("laws");
