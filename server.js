var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
var cors = require('cors');
var RegistrationRoutes = require('./expressRoutes/RegistrationRoutes');
var EmployeeRoutes = require('./expressRoutes/EmployeeRoutes');
var ContactRoutes = require('./expressRoutes/ContactRoutes');


  mongo.connect("mongodb://localhost:27017/nodeangular").then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
  );
   
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  


  app.use(bodyParser.json());
  app.use(cors());
  const port = process.env.PORT || 8080;
  
  app.use('/Registration', RegistrationRoutes);
  app.use('/Employee', EmployeeRoutes);
  app.use('/Contact',ContactRoutes);
  
  const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
  });