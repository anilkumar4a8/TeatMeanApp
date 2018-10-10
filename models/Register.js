var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Register = new Schema({
  firstName: { type: String   },       
 lastName: { type: String   }, 
 earnedLeave: { type: String },
 sickLeave:{type: String},
 email: { type: String },
 country: { type: String}, 
 password: { type: String},
 totalLeaves:{type:String}

},{
    collection: 'Register'
  });


module.exports = mongoose.model('Register', Register);