scrollToBottom = function scrollToBottom (duration) {
  var messageWindow = $(".message-history");
  var scrollHeight = messageWindow.prop("scrollHeight"); //JQuery
  messageWindow.stop().animate({scrollTop: scrollHeight}, duration || 0);
};
