Template.message.onRendered(function () {
  if (autoScrollingIsActive) {
    scrollToBottom(250);
  } else {
    if (Meteor.user() && this.data.username !== Meteor.user().username) {
      if (!thereAreUnreadMessages.get()) {
        counts.set(1);
      } else {
        counts.set(counts.get() + 1);
      }
      //document.getElementById("msg-btn").innerHTML = count;
      thereAreUnreadMessages.set(true);
    }
  }
});
