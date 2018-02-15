import { Meteor } from 'meteor/meteor';
import {Deputies} from '../imports/collections/deputies.js';

//import {usersShemas} from '../imports/collections/usersShemas.js';// not sure about the name of the file to import, make the app crash

//console.log(Deputies.find({}).fetch(), "this file runs")

//Return all the deputies
Meteor.publish('deputies', () => {
  return Deputies.find({});
});

Meteor.publish('selectedDeputy', ()=> {
  return Deputies.findOne(Meteor.user().profile.selectedDeputy);
});


Meteor.methods({
  'onSendResetPasswordEmail': function(){
    console.log('from onLostPassword method');//It returns the console.log
  },


  'onSelectingAdeputy': function (deputyId){
        Meteor.users.update(Meteor.userId(), {
        $set: {
          'profile.selectedDeputy':  deputyId,
        },
      });
  }
});


