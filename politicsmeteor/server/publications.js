import { Meteor } from "meteor/meteor";
import { Deputies } from "../imports/collections/deputies.js";
import { Laws } from "../imports/collections/laws.js";

//PUBLICATIONS//////////////////////////////////

//Return all the deputies
Meteor.publish("deputies", () => {
  return Deputies.find({});
});

//Return only 20 deputies for web
Meteor.publish("deputies_20", function(per_page) {
  return Deputies.find({}, { limit: per_page });
});

//Return the selected deputy
Meteor.publish("selectedDeputy", () => {
  return Deputies.findOne(Meteor.user().profile.selectedDeputy);
});

Meteor.publish("laws", () => {
  return Laws.find({});
});

//METHODS///////////////////////////////////

Meteor.methods({
  onSendResetPasswordEmail: function() {
    console.log("from onLostPassword method");
  },

  onSelectingAdeputy: function(deputyId) {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        "profile.selectedDeputy": deputyId
      }
    });
  },

  _OnAgree: function(votes) {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        "profile.votes": votes
      }
    });
  },

  _OnDisagree: function(votes) {
    Meteor.users.update(Meteor.userId(), {
      $set: {
        "profile.votes": votes
      }
    });
  }
});
