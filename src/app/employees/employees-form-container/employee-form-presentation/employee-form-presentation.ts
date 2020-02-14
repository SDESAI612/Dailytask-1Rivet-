import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { EmployeesPresenterService } from '../employees-form-presenter/employees-form-presenter';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.html',
  styleUrls: ['./employee-form-presentation.scss'],
  providers:[EmployeesPresenterService]
})
export class EmployeeFormPresentation implements OnInit,OnChanges {

  employeeForm: FormGroup;
  @Output() addEvent = new EventEmitter<FormGroup>(); 
  @Input() getDataJson;
  @Output() editEvent = new EventEmitter<FormGroup>();
 
  constructor( private employeeFormPresenter: EmployeesPresenterService) { }

  ngOnInit() {
    debugger;
    this.employeeForm=this.employeeFormPresenter.buildEmployeeForm();
    
    //  console.log(this.employeeForm);
    // alert(this.getData);
       
   } 

   ngOnChanges()
  {
    debugger
    console.log(this.getDataJson);
    this.employeeForm.patchValue(this.getDataJson)
    // alert(JSON.stringify('ByID:-'+this.getDataJson));
   
  }
  /**
   * This funtion will add data to JSON file
   */  
 public addData(): void
    {
      if(this.getDataJson.id)
      { debugger
        // this.employeeForm=this.getDataJson
        this.editEvent.emit(this.employeeForm.value)
      }

      else
      // this.employeeForm=this.employeeFormPresenter.buildEmployeeForm()
      {
        this.addEvent.emit(this.employeeForm.value);
      }
    }



}
