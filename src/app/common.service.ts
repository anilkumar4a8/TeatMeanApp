import { Injectable } from '@angular/core';   
import {Http,Response, Headers, RequestOptions } from '@angular/http';   
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs/Observable';
import { RouterModule, Routes, Router } from '@angular/router';
import { Location } from '@angular/common';  
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/do';  
import { Registration } from './registration/registration.model';
import { Employee } from './employee/employee.model';
import { Contact } from './contact/contact.model';
@Injectable()  
export class CommonService {  
  
  constructor(private http: HttpClient,private router: Router,private location:Location ) { }  
 
  saveUser(f,l,earned,sick,p,e,c){      
    var totalLeaves=parseFloat(earned)+parseFloat(sick);
    const uri = 'registration/add';
    const obj = {
     firstName:f,
     lastName:l,
     earnedLeave:earned,
     sickLeave:sick,
     email:e,
     password:p,
     country:c,
     totalLeaves:totalLeaves
    
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log(res)); 
       this.router.navigateByUrl("registration")
        location.reload();
                 
  }  
  saveleaveType(e,ei,l,s,end){      
    
    const uri = 'employee/addleave';
    const obj = {
      
     employeeName:e,
     employeeId:ei,
     leaves:l,
     startDate:s,
     endDate:end
     
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log(res)); 
       this.router.navigateByUrl("employee") 
       location.reload();         
  }  
  savecontactType(cn,e,c,f,l,m,p,pt,ut,a){      
    alert(cn);
    const uri = 'contact/addcontact';
    const obj = {
     
      contactName:cn,
      emailAddress:e,
     contact:c,
     firstName: f,
     lastName:l,
     mobile:m,
     phone:p,
     postiontitle:pt,
     usertags:ut,
     addtospecificprojects:a
     
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log(res));
           
       this.router.navigateByUrl("contact") 
       location.reload();         
  }  
  getUser() {
    const uri = 'registration';
    return this
            .http
            .get(uri)
            .map(res => {
            
              return res;
            });
  }
  getleaveType() {
    const uri = 'employee';
    return this
            .http
            .get(uri)
            .map(res => {
            
              return res;
            });

  }
  getcontactType() {
    const uri = 'contact';
    return this
            .http
            .get(uri)
            .map(res => {
            
              return res;
            });

  }

 
            editUser(id) {
              const uri = 'registration/edit/' + id;
              return this
                      .http
                      .get(uri)
                      .map(res => {
                        return res;
                      });
            }
            editleaveType(id) {
              const uri = 'employee/editleave/' + id;
              return this
                      .http
                      .get(uri)
                      .map(res => {
                        return res;
                      });
            }
            editContactType(id) {
              const uri = 'contact/edit/' + id;
              return this
                      .http
                      .get(uri)
                      .map(res => {
                        return res;
                      });
            }
          
           updateUser(i,f,l,earned,sick,e,p,c) {
              const uri = 'registration/update/';
          
              const obj = {
                _id:i,
                firstName:f,
                lastName:l,
                earnedLeave:earned,
                sickLeave:sick,
                email:e,
                password:p,
                country:c
              };
              this
                .http
                .post(uri, obj)
                .subscribe(res => console.log('Done'));
                location.reload();
            }  
            
            
            updateleaveType(i,e,ei,l,s,end) {
              const uri = 'employee/updateleave/';
          
              const obj = {
                _id:i,
                employeeName:e,
                employeeId:ei,
                leaves:l,
                startDate:s,
                endDate:end
              };
              this
                .http
                .post(uri, obj)
                .subscribe(res => res);
                location.reload();
            } 
            updatecontactType(i,cn,e,c,f,l,m,p,pt,ut,a) {
              const uri = 'contact/updatecontact/';
          
              const obj = {
                _id:i,
                contactName:cn,
                emailAddress:e,
                contact:c,
                firstName: f,
                lastName:l,
                mobile:m,
                phone:p,
                postiontitle:pt,
                usertags:ut,
                addtospecificprojects:a
              };
              this
                .http
                .post(uri, obj)
                .subscribe(res => res);
                location.reload();
            } 


        /*    SearchleaveType(id,leave,start,end) {
              const uri = 'employee/Searchleave/';
              let myHeaders = new Headers();
              myHeaders.append('Content-Type', 'application/json');    
              let myParams = new URLSearchParams();
              myParams.append('employeeId', id);	
              myParams.append('leaves', leave);
              myParams.append('startDate', start);
              myParams.append('endDate', end);
              let options = new RequestOptions({ headers: myHeaders, params: myParams });
            
              return this.http.get('employee/Searchleave', { headers: myHeaders, params: myParams })
              
            .map(res => {
              return res;});
          } */
            SearchleaveType(id,leave,start,end) {
             // const uri = 'employee/Searchleave/';
             // const uri = 'employee/Searchleave/'+{"employeeId":id,"leaves":leave,"startDate":start,"endDate":end};
             const uri = 'employee/Searchleave/';
             
                 const obj = {
                   employeeId:id,
                   leaves:leave,
                   startDate:start,
                   endDate:end
                 };
                return this 
                   .http
                   .post(uri, obj)
                   .map(res => {
                   
                   return res;
                  });
            } 
            Searchid(id) {
              // const uri = 'employee/Searchleave/';
              // const uri = 'employee/Searchleave/'+{"employeeId":id,"leaves":leave,"startDate":start,"endDate":end};
        
              const uri = 'employee/Searchid/';
              
                  const obj = {
                    employeeId:id,
                   
                  };
                 return this 
                    .http
                    .post(uri, obj)
                    .map(res => {
                    
                    return res;
                   });
             } 
             

            /*  updateUser(f,l,earned,sick,e,p,c) {
             
              const uri = 'registration/update/' + id;
          
              const obj = {
                firstName:f,
                lastName:l,
                earnedLeave:a
              };
              this
                .http
                .post(uri, obj)
                .subscribe(res => console.log('Done'));
} */
  deleteUser(id) {
    
    const uri = 'registration/delete/';

    const obj = {
      _id:id
     
    };
    alert(obj);
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }
  deleteleaveType(id) {
    alert(id);
    const uri = 'employee/deleteleave/';

    const obj = {
      _id:id
     
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => res);
      
  }
  deletecontactType(id) {
    alert(id);
    const uri = 'contact/deletecontact/';

    const obj = {
      _id:id
     
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => res);
      
  }
incrementLeave(f){
  
  for (let i in f) {
    
    const uri = 'registration/incrementLeave/';
    
        
        this
          .http
          .post(uri, f[i])
          .subscribe(res => console.log('Done'));
  }
  return this.getUser();
  
 }

  };