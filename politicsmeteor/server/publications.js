Meteor.publish('deputies', () => {
  return Deputies.find({});
});

