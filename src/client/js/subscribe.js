Meteor.subscribe("txts", {
  onReady: function () {
    scrollToBottom();
    autoScrollingIsActive = true;
  }
});
