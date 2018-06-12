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

  "laws.update": function(lawId, titleLoi, abstractLoi) {
    console.log(lawId, titleLoi, abstractLoi, "from laws.update");

    return Laws.update(lawId, {
      $set: { title: titleLoi, abstract: abstractLoi }
    });
  },

  "laws_image.update": function(lawId, downloadUrl) {
    console.log(downloadUrl, "from laws_image.update");

    return Laws.update(lawId, {
      $set: { image: downloadUrl }
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

  updateVotes(loi, newValue, existingVoteValue) {
    if (newValue !== existingVoteValue) {
      console.log(
        newValue,
        existingVoteValue,
        newValue === "oui" ? 1 : existingVoteValue ? -1 : 0
      );
      Laws.update(loi, {
        $inc: {
          vote_yes: newValue === "oui" ? 1 : existingVoteValue ? -1 : 0,
          vote_no: newValue === "non" ? 1 : existingVoteValue ? -1 : 0
        }
      });
    }
  }
});
export const Laws = new Mongo.Collection("laws");
