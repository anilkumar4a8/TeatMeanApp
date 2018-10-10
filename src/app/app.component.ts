
import { Component, OnInit } from '@angular/core';  
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from './common.service';  
import{RegistrationComponent} from './registration/registration.component';
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import { Registration } from './registration/registration.model';
import { Employee } from './employee/employee.model';
import { Contact } from './contact/contact.model';

import 'rxjs/add/operator/map';


@Component({  
  selector: 'app-root',  
  template: '<router-outlet></router-outlet>',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent implements  OnInit { 
   
  regModel = new Registration();
  // It maintains list of Registrations
  registrations: Registration[] = [];
  // It maintains registration Model
  
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  constructor(private newService :CommonService) {   }  
   Repdata;  
   valbutton ="Save"; 

   
   empModel = new Employee();
   employees: Employee[] = [];
   showNew1: Boolean = false;
   submitType1: string = 'Save';
   selectedRow1: number;
  
   
   valbutton1 ="Save";

      conModel = new Contact();
   contacts: Contact[] = [];
   
   submitType2: string = 'Save';
   selectedRow2: number;
  
   
   valbutton2 ="Save";
   
ngOnInit():void {    
  this.newService.getUser().subscribe(data =>  this.Repdata = data)  
  this.newService.getleaveType().subscribe(data => this.Repdata = data)
  this.newService.getcontactType().subscribe(data => this.Repdata = data)
  
}  
  
onSave = function(user,isValid: boolean) {    
 user.mode= this.valbutton;  
  this.newService.saveUser(user)  
  .subscribe(data =>  {  alert(data.data);  
    
    this.ngOnInit();  
    
  }   
  , error => this.errorMessage = error )  
    
} 
onLeaveSave = function(leave,isvalid: boolean) {
  leave.mode= this.valbutton;
  this.newService.saveLeave(leave)
  .subscribe(data => {  alert(data.data);
    this.ngOnInit();
  }  
  ,error  => this.errorMessage = error )
}
onContactSave = function(contact,isvalid: boolean) {
  contact.mode= this.valbutton;
  this.newService.saveContact(contact)
  .subscribe(data => {  alert(data.data);
    this.ngOnInit();
  }  
  ,error  => this.errorMessage = error )
}

onEdit = function(kk) {  
this.firstName = kk.firstName;  
this.lastName= kk.lastName;  
this.age=kk.age;
this.email= kk.email;  
this.valbutton ="Update";  
}  
onleaveEdit = function(kk) {  
  this.employeeName = kk.employeeName;  
  this.employeeId= kk.employeeId;  
  this.leaves=kk.leaves;
  this.startdate= kk.startDate;  
  this.valbutton1 ="Update"; 
}
delete = function(id) {  
this.newService.deleteUser(id)  
.subscribe(data =>   { alert(data.data) ; this.ngOnInit();}, error => this.errorMessage = error )   
}  
  
}  
