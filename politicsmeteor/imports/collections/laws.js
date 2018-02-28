//Declare our collection
import {Mongo} from 'meteor/mongo';

Meteor.methods({
  'laws.insert': function (titleLoi, abstractLoi){
    return Laws.insert({
    createdAt: new Date(),
    title: titleLoi,
    abstract :abstractLoi,
    category: [],
    ownerId: this.userId,
    });
  },

  'laws.update': function(titleLoi, abstractLoi){
    
    return  Laws.update ({
      $set:{title:titleLoi, abstract:abstractLoi}
    });
  },

  'laws.remove': function(law){
    return Laws.remove(law);
  }
});

export const Laws = new Mongo.Collection('laws');
