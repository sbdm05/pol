//Declare our collection
import { Mongo } from "meteor/mongo";

Meteor.methods({
  setVote: function(depute, votes) {
    return Deputies.update(depute, {
      $set: {
        "depute.votes": votes
      }
    });
  },

  VoteNo: function(depute, votes) {
    return Deputies.update(depute, {
      $set: {
        "depute.votes": votes
      }
    });
  },
  HasNotVoted: function(depute, votes) {
    return Deputies.update(depute, {
      $set: {
        "depute.votes": votes
      }
    });
  }
});

export const Deputies = new Mongo.Collection("deputies");
