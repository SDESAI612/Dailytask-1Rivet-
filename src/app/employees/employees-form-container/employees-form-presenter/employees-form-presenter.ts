import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class EmployeesPresenterService {

  constructor(private fb: FormBuilder) { }

 public buildEmployeeForm():FormGroup
 {
    debugger;
    return this.fb.group({
    fullName: ['',],
    emailAddress: ['',],
    mobileNumber: ['',],
    cityName: [''],
    dateHire: [''],
    departmentName: [''],
    gender: [''],
    employeeType: [false]
  });
}
}
