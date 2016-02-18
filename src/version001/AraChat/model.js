/**
 * Models
 */

/**
 * Warning:
 *
 * This works because we exposed the Messages variable in the models.js to both the client and the server. 
 * Therefore we have access to the Messages variable in the JavaScript console in the browser.
 *
 * Security warning: 
 * 	 This exposes a security hole as any client will be able to modify the database (and delete messages for example). 
 *   It¡¯s of course possible to fix. Read more at http://docs.meteor.com/#dataandsecurity.
 */

// Define a new MongoDB collection which
// can be connected with client.html
Messages = new Meteor.Collection('messages');