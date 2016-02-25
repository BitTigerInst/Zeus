// Meteor.publish("txts", function (limit) {
//   // use field filtering to include (1) or exclude (0)
//   //return Messages.find({}, {fields: {messageText: 1, username: 1},
//   //                          limit : limit});
//   return Messages.find({}, {limit : limit});
// });

//Meteor.publish("num-of-msgs", function () {
//  return Messages.find();
//});

Meteor.publish("txts", function () {
  // use field filtering to include (1) or exclude (0)
  //return Messages.find({}, {fields: {messageText: 1, username: 1},
  //                          limit : limit});
  return Messages.find();
});
