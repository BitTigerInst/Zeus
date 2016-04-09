Template.more_msgs_button.helpers({
  thereAreUnreadMessages: function () {
    return thereAreUnreadMessages.get();
  },
  numNewMessages: function () {
    return counts.get();
  },
});

Template.more_msgs_button.events({
  "click .more-messages": function () {
    scrollToBottom(500);
    thereAreUnreadMessages.set(false);
  },
});
