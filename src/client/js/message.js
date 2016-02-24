Template.message.onRendered(function () {
  if (autoScrollingIsActive) {
    scrollToBottom(250);
  } else {
    if (Meteor.user() && this.data.username !== Meteor.user().username) {
      thereAreUnreadMessages.set(true);
    }
  }
});
