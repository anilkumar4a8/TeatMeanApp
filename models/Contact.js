var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Contact = new Schema({
    contactName: { type: String   },       
    emailAddress: { type: String   }, 
    contact1: { type: String }, 
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    phone: { type: String },
    postiontitle: { type: String },
    usertags: { type: String },
    addtospecificprojects: { type: String }
 
},{
    collection: 'Contact'
  });


module.exports = mongoose.model('Contact', Contact);