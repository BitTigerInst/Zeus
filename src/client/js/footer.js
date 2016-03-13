Template.footer.events({
  "submit .new-message": function (event) {
    var text = event.target.text.value;

    Meteor.call("sendMessage", text); //lib function
    //scrollBottom(250);
    autoScrollingIsActive = true;
    event.target.text.value = "";
    event.preventDefault();// understand it in details later
  },
});
