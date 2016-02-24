Template.more_msgs_button.events({
  "click .more-messages": function () {
    scrollToBottom(500);
    thereAreUnreadMessages.set(false);
  },
});
