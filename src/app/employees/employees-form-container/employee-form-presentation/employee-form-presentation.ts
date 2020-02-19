import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { EmployeesPresenterService } from '../employees-form-presenter/employees-form-presenter';
import { Employee } from '../../employee.model';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  providers:[EmployeesPresenterService]
})
export class EmployeeFormPresentation implements OnInit {

  public employeeForm: FormGroup;
  public employeeData: Employee
  @Output() addEvent = new EventEmitter<Employee>(); 
  @Input() set getDataEmployee(value: Employee)
  {
      if(value)
      {
        this.employeeData = value;
        console.log(this.employeeData);
      }
      this.employeeForm.patchValue(this.getDataEmployee);
  }  

  get getDataEmployee()
  {
    return this.employeeData;
  }
  constructor( private employeeFormPresenter: EmployeesPresenterService) {
    this.employeeForm=this.employeeFormPresenter.buildEmployeeForm();
   }

  ngOnInit() {
   } 

 
  /**
   * This funtion will add data to JSON file
   */  
 public addData(): void
    {  
        this.addEvent.emit(this.employeeForm.value);
    }
      
 
}
