/**
 * Templates
 */
Template.messages.helpers({
	msgs: function() {
		/**
    	* remember that Messages is a MongoDB object
    	* created in model.js at the top folder
    	*
    	* In this case 'msg' will contain all message
    	* documents from MongoDB sorted on the time attribute.
    	*/
		return Messages.find({}, {sort: {time: -1}});
  }
})

Template.input.events = {
	'keydown input#message' : function (event) {
		if (event.which == 13) { // 13 is the enter key event
			if (Meteor.user())
				var name = Meteor.user().profile.name;
			else
				var name = 'WhoAmI';

      var message = document.getElementById('message');

      if (message.value != '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now(),
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
}
