Messages = new Mongo.Collection("msgs");

Meteor.methods({
  sendMessage: function (messageText) {
    /* add authentication here */
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Messages.insert({
      messageText: messageText,
      createdAt: new Date(),
      username: Meteor.user().username // <-add real username
    });
  }
});

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("txts", function () {
    return Messages.find();
  });
}

var autoScrollingIsActive = false;
/* reactive var here */
thereAreUnreadMessages = new ReactiveVar(false);

scrollToBottom = function scrollToBottom (duration) {
  var messageWindow = $(".message-window");
  var scrollHeight = messageWindow.prop("scrollHeight");
  messageWindow.stop().animate({scrollTop: scrollHeight}, duration || 0);
};

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("txts", {
    onReady: function () {
      scrollToBottom();
      autoScrollingIsActive = true;
    }
  });

  Template.body.helpers({
    recentMessages: function () {
      return Messages.find({}, {sort: {createdAt: 1}});
    },
    /* unread message helper */
    thereAreUnreadMessages: function () {
     return thereAreUnreadMessages.get();
   },
  });

  Template.message.onRendered(function () {
    if (autoScrollingIsActive) {
      scrollToBottom(250);
    } else {
      if (Meteor.user() && this.data.username !== Meteor.user().username) {
        thereAreUnreadMessages.set(true);
      }
    }
  });

  Template.body.events({
    "submit .new-message": function (event) {
      var text = event.target.text.value;

      Meteor.call("sendMessage", text);
      scrollBottom(250);

      event.target.text.value = "";
      event.preventDefault();
    },

    /* scroll event */
    "click .more-messages": function () {
      scrollToBottom(500);
      thereAreUnreadMessages.set(false);
    },

    "scroll .message-window": function () {
      var howClose = 80;  // # pixels leeway to be considered "at Bottom"
      var messageWindow = $(".message-window");
      var scrollHeight = messageWindow.prop("scrollHeight");
      var scrollBottom = messageWindow.prop("scrollTop") + messageWindow.height();
      var atBottom = scrollBottom > (scrollHeight - howClose);
      autoScrollingIsActive = atBottom ? true : false;
      if (atBottom) {        // <--new
        thereAreUnreadMessages.set(false);
      }
    },

  });

  /*account config*/
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });
}
