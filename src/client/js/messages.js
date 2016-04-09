Template.messages.helpers({
  recentMessages: function () {
    //can return recent messages
    return Messages.find({}, {sort: {createdAt: 1}});
  },
});

Template.messages.events({
  /* scroll event */
  "scroll .message-history": function () {
    var howClose = 600;  // # pixels leeway to be considered "at Bottom"
    var messageWindow = $(".message-window");
    var scrollHeight = messageWindow.prop("scrollHeight");
    var scrollBottom = messageWindow.prop("scrollTop") + messageWindow.height();
    var atBottom = scrollBottom > (scrollHeight - howClose);
    autoScrollingIsActive = atBottom ? true : false;
    if (atBottom) {
      thereAreUnreadMessages.set(false);
    }
  },

});
