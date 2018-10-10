var express = require('express');
var EmployeeRoutes = express.Router();
var Employee = require('../models/Employee');
EmployeeRoutes.route('/addleave').post(function (req, res) {
  var common = new Employee(req.body);
  console.log("values"+common);
   common.save()
    .then(item => {
    })
    .catch(err => {
    });
    res.redirect("/");
});


  
  
 
 


// Defined get data(index or listing) route
EmployeeRoutes.route('/').get(function (req, res) {
   Employee.find(function (err, employees ){
     
    if(err){
      console.log(err);
    }
    else {
    //  console.log("eneterd");
      res.json(employees);
      //console.log(employees);
    }
  });
});


// Defined edit route
EmployeeRoutes.route('/editleave/:id').get(function (req, res) {
  console.log("entered into edit");
  var id = req.params.id;
  employee.findById(id, function (err, employee){
      res.json(employee);
  });
});

//  Defined update route
EmployeeRoutes.route('/updateleave').post(function (req, res) {
  var myquery = { _id: req.body._id };
  var employeeName=req.body.employeeName;
  var employeeId=req.body.employeeId;
  
  var leaves=req.body.leaves;
  var startDate=req.body.startDate;
  var endDate=req.body.endDate
  var newvalues = { $set: {employeeName:employeeName,employeeId:employeeId,leaves:leaves,startDate:startDate,endDate:endDate } };
  
  Employee.updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    
  });
});

EmployeeRoutes.route('/Searchleave/').post(function (req, res) {
  console.log(req.body);
  var id = req.body.employeeId;
  var leave=req.body.leaves;
  var start=req.body.startDate;
  var end=req.body.endDate;
  console.log("values are"+id);
    Employee.find( { employeeId:id, leaves:leave,startDate:{$gte:start},endDate:{$lte:end}},function (err, employee){
    
    console.log("leavedetails"+employee);
      res.json(employee);
    });
  });
  EmployeeRoutes.route('/Searchid/').post(function (req, res) {
    console.log(req.body);
    var id = req.body.employeeId;
    
    console.log("values are"+id);
    Employee.find( { employeeId:id, },function (err, employee){
    
      
      console.log("leavedetails"+employee);
        res.json(employee);
      });
    });
  

// Defined delete | remove | destroy route
/*EmployeeRoutes.route('/deleteleave/:id').get(function (req, res) {
  console.log("in deleteleave"+id);
   employee.findByIdAndRemove({_id: req.params.id}, function(err, employee){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});*/

EmployeeRoutes.route('/deleteleave').post(function (req, res) {
  var id= req.body._id;
  var myquery = { _id: id};
  
  Employee.deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  
  });
});
module.exports = EmployeeRoutes;
