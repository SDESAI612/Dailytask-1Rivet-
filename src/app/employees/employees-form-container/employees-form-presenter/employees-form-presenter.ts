import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class EmployeesPresenterService {

  constructor(private fb: FormBuilder) { }

 public buildEmployeeForm():FormGroup
 {
    debugger;
    return this.fb.group({
    fullName: ['',[Validators.required,Validators.minLength(4)]],
    emailAddress: ['',[Validators.required]],
    mobileNumber: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    cityName: ['',[Validators.required]],
    dateHire: ['',[Validators.required]],
    departmentName: ['',Validators.required],
    gender: ['',[Validators.required]],
    employeeType: [false]
  });
}
}
