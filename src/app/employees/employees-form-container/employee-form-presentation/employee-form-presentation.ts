import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { EmployeesPresenterService } from '../employees-form-presenter/employees-form-presenter';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  providers:[EmployeesPresenterService]
})
export class EmployeeFormPresentation implements OnInit {

  employeeForm: FormGroup;
  @Output() addEvent = new EventEmitter<FormGroup>(); 
 
  constructor( private employeeFormPresenter: EmployeesPresenterService) { }

    addData()
    {
      debugger
      // this.employeeForm=this.employeeFormPresenter.buildEmployeeForm()
      this.addEvent.emit(this.employeeForm.value);
    
    }

  ngOnInit() {
    debugger;
   this.employeeForm=this.employeeFormPresenter.buildEmployeeForm();
    console.log(this.employeeForm);
    
  }


}
