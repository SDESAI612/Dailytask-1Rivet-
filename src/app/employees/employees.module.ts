import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesFormContainer } from './employees-form-container/employees-form-container';
import { EmployeesListContainer } from './employees-list-container/employees-list-container';
import {  EmployeeFormPresentation } from './employees-form-container/employee-form-presentation/employee-form-presentation';
import { EmployeesListPresentation } from './employees-list-container/employees-list-presentation/employees-list-presentation';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesListPreseterService } from './employees-list-container/employees-list-presenter/employees-list-presenter';
import { EmployeesService } from './employees.service';

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
