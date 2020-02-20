import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesFormContainer } from './employees-form-container/employees-form-container';
import {  EmployeeFormPresentation } from './employees-form-container/employee-form-presentation/employee-form-presentation';
import { EmployeesListContainer } from './employees-list-container/employees-list-container';
import { EmployeesListPresentation } from './employees-list-container/employees-list-presentation/employees-list-presentation';
import { EmployeesListPreseterService } from './employees-list-container/employees-list-presenter/employees-list-presenter';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesService } from './employees.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ EmployeesFormContainer, EmployeeFormPresentation, EmployeesListContainer, EmployeesListPresentation],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  exports: [
    EmployeesFormContainer,
    EmployeesListPresentation
  ],
  providers:[EmployeesListPreseterService, EmployeesService]
})
export class EmployeesModule { }
