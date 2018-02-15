import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import  {Deputies} from '../imports/collections/deputies.js';
import './publications';



Meteor.startup(() => {
console.log("log here")
console.log(Deputies.find().count())
// Check to see if data exists in the collection
  if (Deputies.find().count() ===0){

    const deputyList = JSON.parse(Assets.getText('deputies_list.json'));

    console.log(Object.keys(deputyList), "deputylist")

    console.log('Seeding DB with ${deputyList.deputies_list.length} documents');

    const DeputiesRaw = Deputies.rawCollection();
    const bulkDeputiesOp= DeputiesRaw.initializeUnorderedBulkOp();
    bulkDeputiesOp.executeSync = Meteor.wrapAsync(bulkDeputiesOp.execute);

    deputyList.deputes.forEach((deputy)=>{
      console.log(...deputy, "spread deputy")
      bulkDeputiesOp.insert({
        _id: Random.id(),
        ...deputy,
      });
    });
    bulkDeputiesOp.executeSync();

  }
});
