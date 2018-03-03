//Declare our collection
import {Mongo} from 'meteor/mongo';
//import deputy_detail from '../../client/components/deputy_detail';

Meteor.methods({
    'votes.insert': function (depute, loi, choix){
        console.log('from votes.insert', depute, loi)
        return Deputies.update(depute,
           {$push: {loi: {loi:loi}}}
        );
    },
});

export const Deputies = new Mongo.Collection('deputies');



