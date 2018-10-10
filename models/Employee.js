var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Employee = new Schema({
  employeeName: { type: String   },       
 employeeId: { type: String   }, 
 
 
 leaves: { type: String}, 
 startDate: { type: Date},
 endDate: { type: Date}

},{
    collection: 'Employee'
  });


module.exports = mongoose.model('Employee', Employee);