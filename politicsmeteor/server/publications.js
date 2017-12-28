import { Meteor } from 'meteor/meteor';
import {Deputies} from '../imports/collections/deputies.js';

//console.log(Deputies.find({}).fetch(), "this file runs")

Meteor.publish('deputies', () => {
  return Deputies.find({});
});


Meteor.methods({
  'onLostPasswordMethod': function(){
    console.log('from onLostPassword method');//It returns the console.log
  }
});
