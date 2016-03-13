scrollToBottom = function scrollToBottom (duration) {
  var messageWindow = $(".message-window");
  var scrollHeight = messageWindow.prop("scrollHeight"); //JQuery
  messageWindow.stop().animate({scrollTop: scrollHeight}, duration || 0);
};
