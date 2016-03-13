//https://manual.meteor.com/#deps-asimpleexample
//Deps.autorun is used because of reactive var Session
//it will show the changes immediately
//
// Deps.autorun(function() {
//   Meteor.subscribe("txts", Session.get('itemsLimit'), {
//     onReady: function () {
//       scrollToBottom();
//       autoScrollingIsActive = true;
//     }
//   });
// });

Meteor.subscribe("txts", {
  onReady: function () {
    scrollToBottom();
    autoScrollingIsActive = true;
  }
});
