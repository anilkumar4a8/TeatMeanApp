var express = require('express');
var RegistrationRoutes = express.Router();
var Registration = require('../models/Register');
RegistrationRoutes.route('/add').post(function (req, res) {
  var coin = new Registration(req.body);
  
   coin.save()
    .then(item => {
    })
    .catch(err => {
    });
    res.redirect("/");
});
RegistrationRoutes.route('/incrementLeave').post(function (req, res) {
  var myquery = { _id: req.body._id };
  var earnedLeave=parseInt(req.body.earnedLeave)+parseInt("1");
  var sickLeave=parseFloat(req.body.sickLeave)+parseFloat("0.5");
  var totalLeaves=parseFloat(earnedLeave)+parseFloat(sickLeave);
  var newvalues = { $set: {earnedLeave:earnedLeave,sickLeave:sickLeave,totalLeaves:totalLeaves  } };
  
  Registration.updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    
  });
 
 
});

// Defined get data(index or listing) route
RegistrationRoutes.route('/').get(function (req, res) {
   Registration.find(function (err, registrations ){
    if(err){
      console.log(err);
    }
    else {
   //   console.log("eneterd");
      res.json(registrations);
      //console.log(registrations);
    }
  });
});

// Defined edit route
RegistrationRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  registration.findById(id, function (err, registration){
      res.json(registration);
  });
});

//  Defined update route
RegistrationRoutes.route('/update').post(function (req, res) {
  var myquery = { _id: req.body._id };
  var earnedLeave=req.body.earnedLeave;
  var sickLeave=req.body.sickLeave;
  var totalLeaves=parseFloat(earnedLeave)+parseFloat(sickLeave);
  var firstName=req.body.firstName;
  var lastName=req.body.lastName;
  var email=req.body.email;
  var password=req.body.password;
  var country=req.body.country;
  var newvalues = { $set: {earnedLeave:earnedLeave,sickLeave:sickLeave,totalLeaves:totalLeaves,firstName:firstName,lastName:lastName ,email:email,password:password,country:country } };
  
  Registration.updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    
  });
});

// Defined delete | remove | destroy route
/*RegistrationRoutes.route('/delete/:id').get(function (req, res) {
  console.log("in delete"+id);
   registration.findByIdAndRemove({_id: req.params.id}, function(err, registration){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});*/
RegistrationRoutes.route('/delete').post(function (req, res) {
  var id = req.body._id;
  var myquery = { _id: id };
  Registration.deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    //console.log("1 document deleted");
  
  });
});
module.exports = RegistrationRoutes;
