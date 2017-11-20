import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import  {Deputies} from {'../imports/collections/deputies.js';

Meteor.startup(() => {

  if (Deputies.find().count ===0){
    const deputyList = JSON.parse(Assets.getText('deputies_list.json'));

    console.log('Seeding DB with ${deputyList.deputies_list.length} documents');

    const DeputiesRaw = Deputies.rawCollection();
    const bulkDeputiesOp= DeputiesRaw.initializeUnorderedBulkOp();
    bulkDeputiesOp.executeSync = Meteor.wrapAsync(bulkDeputiesOp.execute);

    deputyList.deputies_list.forEach((deputy)=>{
      bulkDeputiesOp.insert({
        _id: Random.id(),
        ...deputy,
      });
    });
    bulkDeputiesOp.executeSync();

  }


});
