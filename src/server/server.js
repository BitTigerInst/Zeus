Meteor.publish("txts", function () {
  return Messages.find();
});
