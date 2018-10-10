var express = require('express');
var ContactRoutes = express.Router();
var Contact = require('../models/Contact');
ContactRoutes.route('/addcontact').post(function (req, res) {
  console.log("cn");
  var contact = new Contact(req.body);
  console.log("values"+contact);
  contact.save()
    .then(item => {
    })
    .catch(err => {
    });
    res.redirect("/");
});


  
  
 
 


// Defined get data(index or listing) route
ContactRoutes.route('/').get(function (req, res) {
    Contact.find(function (err, contacts ){
     
    if(err){
      console.log(err);
    }
    else {
      console.log("eneterd");
      res.json(contacts);
      
    }
  });
  });
  ContactRoutes.route('/editcontact/:id').get(function (req, res) {
    console.log("entered into edit");
    var id = req.params.id;
    contact.findById(id, function (err, contact){
        res.json(contact);
    });
  });
  
  //  Defined update route
  ContactRoutes.route('/updatecontact').post(function (req, res) {
    var myquery = { _id: req.body._id };
    var contactName=req.body.contactName;
    var emailAddress=req.body.emailAddress;
    
    var contact1=req.body.contact1;
    var firstName=req.body.firstName;
    var lastName=req.body.lastName;
    var phone=req.body.phone;
    var postiontitle=req.body.postiontitle;
    var usertags=req.body.usertags;
    var addtospecificprojects=req.body.addtospecificprojects;
    var newvalues = { $set: {contactName:contactName,emailAddress:emailAddress,contact1:contact1,firstName:firstName,lastName:lastName,phone:phone,postiontitle:postiontitle,usertags:usertags,addtospecificprojects:addtospecificprojects } };
    
    Contact.updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      
    });
  });
  ContactRoutes.route('/deletecontact').post(function (req, res) {
    var id= req.body._id;
    var myquery = { _id: id};
    
    Contact.deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
    
    });
  });
  
module.exports = ContactRoutes;
