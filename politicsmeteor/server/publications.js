import { Meteor } from 'meteor/meteor';
import {Deputies} from '../imports/collections/deputies.js';

console.log(Deputies.find({}).fetch(), "this file runs")

Meteor.publish('deputies', () => {
    console.log(Deputies.find({}), "find this log in the terminal")
  return Deputies.find({});
});
