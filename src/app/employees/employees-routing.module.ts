import { NgModule } from '@angular/core';

import { EmployeesFormContainer } from './employees-form-container/employees-form-container';
import { EmployeesListContainer } from './employees-list-container/employees-list-container';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"Registration",
    component:EmployeesListContainer,
  },
  {
    path:"Fetch",
    component:EmployeesFormContainer
  },
  {
    path:"Edit/:id",
    component: EmployeesFormContainer
  },
  {
    path:"",
    component: EmployeesListContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
