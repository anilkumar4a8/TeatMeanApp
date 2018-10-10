import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Employee } from './employee.model';
import { CommonService } from '../common.service';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeName: string;
  employeeId: string;
  leaves: string;
  startDate: Date;
  endDate: Date
  _id;
  private isButtonVisible = false;
  private isSaveButtonVisible=true;
  empModel = new Employee();
employees: Employee[] = [];

showNew: Boolean = false;
submitType: string = 'Save';
selectedRow: number;
leaveType: string[] = ['earnedleave', 'sickleave'];
 
  constructor(public service: CommonService) { }
  getRes;

  ngOnInit() {
    
    this.getleaveType()
    
    
}
list;abc;
getleaveType(): void {
  
  this.service.getleaveType()
      .subscribe(
          employees => {
              this.list = employees;
              this.abc=employees;
          }, 
                      err => {
                  
                  console.log(err);
              })
              
}

employee(employeeForm:Employee): void{

 
}

onNew() {
  
  this.empModel = new Employee();
  this.submitType = 'Save';
  this.showNew = true;
  }
  

onLeaveSave() {
  if (this.submitType === 'Save') {
  this.employees.push(this.empModel);

  this.service.saveleaveType(this.empModel.employeeName,this.empModel.employeeId,this.empModel.
    leaves,this.empModel.startDate,this.empModel.endDate);
  
  } else {
   
  this.employees[this.selectedRow].employeeName = this.empModel.employeeName;
  this.employees[this.selectedRow].employeeId = this.empModel.employeeId;
  this.employees[this.selectedRow].leaves = this.empModel.leaves;
  this.employees[this.selectedRow].startDate = this.empModel.startDate;
  this.employees[this.selectedRow].endDate = this.empModel.endDate;
 location.reload()


  }
  
  this.showNew = false;
  }
  
  onLeaveUpdate(i,e,ei,l,s,end) {
    this.service.updateleaveType(i,e,ei,l,s,end);
    }
onLeaveEdit(index: number) {
   
  this.selectedRow = index;
   let dd = JSON.stringify(this.selectedRow);
 this.empModel = JSON.parse(dd);
  this.submitType = 'update';
  this.showNew = true;
  this.isButtonVisible = true;
  this.isSaveButtonVisible=false;
  }
  onLeaveSearch(id,l,s,e){
    this.service.SearchleaveType(id,l,s,e)
    .subscribe(
      employees => {
          this.list = employees;

      }, 
                  err => {
              
              console.log(err);
          })
   
  }
   
  changed(id){
    this.service.Searchid(id)
    .subscribe(
      employees => {
          this.list = employees;


      }, 
                  err => {
              
              console.log(err);
          })
   
  }

  onLeaveDelete(id) {
  
    this.service.deleteleaveType(id);
    location.reload()
    }
    
  onCancel() {
    this.showNew = false;
    }

onChangeleaves(leaves: string) {
  
  this.empModel.leaves = leaves;
  } 
}

  