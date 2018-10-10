import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Contact } from './contact.model';
import { CommonService } from '../common.service';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit , OnDestroy {
  contacts: Contact[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  contactName: string;
  emailAddress: string;
  contact1: string;
  firstName: string;
  lastName: string;
  mobile: string;
  phone: string;
  postiontitle: string;
  usertags: string;
  addtospecificprojects: string 

  _id;

  private isButtonVisible = false;
  private isSaveButtonVisible=true;

  conModel = new Contact();
  //contacts: Contact[] = [];
  
  showaddResource: Boolean = false;
submitType: string = 'Save';
selectedRow: number;

 
  constructor(private http: HttpClient,public service: CommonService) { }
  getRes;
  list;
  someModel;
  ngOnInit():void {
    this.someModel = 'Select Value';
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    /*this.service.getcontactType()
      .subscribe(
        contacts => {
              this.list = contacts;
              
          }, 
                      err => {
                  
                  console.log(err);
              })*/
   
              this.service.getcontactType().subscribe(contacts => {
                this.list = contacts;
                this.dtTrigger.next();
              });
    
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  

/*getcontactType(): void {
  
  this.service.getcontactType()
      .subscribe(
        contacts => {
              this.list = contacts;
              
          }, 
                      err => {
                  
                  console.log(err);
              })
              
}*/
contact(contactForm:Contact): void{

 
}

addResource() {
  
  this.conModel = new Contact();
  this.submitType = 'Save';
  this.showaddResource = true;
  }
  

onContactSave() {

  if (this.submitType === 'Save') {
  this.contacts.push(this.conModel);
alert(this.conModel.contactName);
  this.service.savecontactType(this.conModel.contactName,this.conModel.emailAddress,this.conModel.
    contact1,this.conModel.firstName, this.conModel.lastName,this.conModel.mobile,this.conModel.phone,this.conModel.postiontitle,this.conModel.usertags,this.conModel.addtospecificprojects);
    
  } else {
   
  this.contacts[this.selectedRow].contactName = this.conModel.contactName;
  this.contacts[this.selectedRow].emailAddress = this.conModel.emailAddress;
  this.contacts[this.selectedRow].contact1 = this.conModel.contact1;
  this.contacts[this.selectedRow].firstName = this.conModel.firstName;
  this.contacts[this.selectedRow].lastName = this.conModel.lastName;
  this.contacts[this.selectedRow].mobile = this.conModel.mobile;
  this.contacts[this.selectedRow].phone = this.conModel.phone;
  this.contacts[this.selectedRow].postiontitle = this.conModel.postiontitle;
  this.contacts[this.selectedRow].addtospecificprojects = this.conModel.addtospecificprojects;
  this.showaddResource=false;
  location.reload()


  }
  this.showaddResource = false;
}
onContactUpdate(i,cn,e,c,f,l,m,p,pt,ut,a) {
  this.service.updatecontactType(i,cn,e,c,f,l,m,p,pt,ut,a);
  }
onContactEdit(index: number) {
 
  this.selectedRow = index;
  let dd = JSON.stringify(this.selectedRow);
this.conModel = JSON.parse(dd);
 this.submitType = 'update';
 this.showaddResource = true;
 this.isButtonVisible = true;
 this.isSaveButtonVisible=false;

}
onContactDelete(id) {
  
  this.service.deletecontactType(id);
  location.reload()
  }
  
onCancel() {
  this.showaddResource = false;
  }
}
