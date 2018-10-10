import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { ContactComponent } from './contact/contact.component' ;
const routes: Routes = [
  {
  path: '',
  component: HomeComponent
  },
  {
  path: 'registration',
  component: RegistrationComponent
  },
  {
  path: 'employee',
  component: EmployeeComponent
},
{
path: 'contact' ,
component: ContactComponent
}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
