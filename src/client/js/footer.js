Template.footer.events({
  "submit .input-box": function (event) {
    var text = event.target.text.value;
    if(text.trim() != ""){
      Meteor.call("sendMessage", text); //lib function
      //scrollBottom(250);
      autoScrollingIsActive = true;
    }
    event.target.text.value = "";
    event.preventDefault();// understand it in details later
  },
});
