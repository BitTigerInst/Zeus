autoScrollingIsActive = false;
/* reactive var here */
thereAreUnreadMessages = new ReactiveVar(false); //

Template.registerHelper("thereAreUnreadMessages",  function () {
   return thereAreUnreadMessages.get();
});
