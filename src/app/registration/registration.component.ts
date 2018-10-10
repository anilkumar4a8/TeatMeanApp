import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Registration } from './registration.model';
import { CommonService } from '../common.service';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firstName: string;
  lastName: string;
  earnedLeave: String;
  sickLeave: String;
  email: string;
  password: string;
  country: string;
  _id;
  private isButtonVisible = false;
  private isSaveButtonVisible=true;
  regModel = new Registration();
registrations: Registration[] = [];

showNew: Boolean = false;
submitType: string = 'Save';
selectedRow: number;
countries: string[] = ['US', 'UK', 'India', 'UAE'];
  constructor(public service: CommonService) { }
  getRes;

  ngOnInit() {
    
    this.getUser()
    
  }
  list;
  getUser(): void {
    this.service.getUser()
        .subscribe(
            registrations => {
                this.list = registrations;
                
            }, 
                        err => {
                    
                    console.log(err);
                })
}
 
  register(registerForm: Registration): void{

   alert("register");
  }
  
onNew() {
  
  this.regModel = new Registration();
  this.submitType = 'Save';
  this.showNew = true;
  }
  increment(f){
this.service.incrementLeave(f);
  }

onSave() {
  if (this.submitType === 'Save') {
  this.registrations.push(this.regModel);

  this.service.saveUser(this.regModel.firstName,this.regModel.lastName,this.regModel.earnedLeave,this.regModel.sickLeave,this.regModel.password,this.regModel.email,this.regModel.country);
  
  } else {
   
  this.registrations[this.selectedRow].firstName = this.regModel.firstName;
  this.registrations[this.selectedRow].lastName = this.regModel.lastName;
  this.registrations[this.selectedRow].earnedLeave = this.regModel.earnedLeave;
  this.registrations[this.selectedRow].sickLeave = this.regModel.sickLeave;
  this.registrations[this.selectedRow].email = this.regModel.email;
  this.registrations[this.selectedRow].password = this.regModel.password;
  this.registrations[this.selectedRow].country = this.regModel.country;
alert(this._id);
/*this.service.updateUser(this.regModel._id,this.regModel.firstName,this.regModel.lastName,
  this.regModel.earnedLeave,this.regModel.sickLeave,this.regModel.email,this.regModel.password,this.regModel.country)
*/
  }
  
  this.showNew = false;
  }
  onUpdate(i,f,l,earned,sick,e,p,c) {
    this.service.updateUser(i,f,l,earned,sick,e,p,c);
    }
onEdit(index: number) {
   
  this.selectedRow = index;
   let dd = JSON.stringify(this.selectedRow);
 this.regModel = JSON.parse(dd);
  this.submitType = 'update';
  this.showNew = true;
  this.isButtonVisible = true;
  this.isSaveButtonVisible=false;
  }
onDelete(id) {
  
  this.service.deleteUser(id);
  }
  
onCancel() {
  this.showNew = false;
  }
  
onChangeCountry(country: string) {
  this.regModel.country = country;
  }  
}

  