import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service'
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { EmployeesModule } from '../employees.module';
import { Employee } from '../employee.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees-form-container',
  templateUrl: './employees-form-container.html',
  styleUrls: ['./employees-form-container.scss']
})
export class EmployeesFormContainer implements OnInit {

  public id:number;
  public getDataEmployee$:Observable<Employee>;

  constructor(private emp: EmployeesService, private routes: ActivatedRoute,private http:HttpClient, private route: Router) { }
 
  ngOnInit() {
    this.id = this.routes.snapshot.params['id'];
    if(this.id)
      {
        this.getEmployee(this.id);

      }
  }

  /**
   * This function will send object to JSON file
   * @param employeeObject This function will take FormGroup Object as parameter
   */
  public addData(employeeObject: Employee):void
  { 
    if(this.id)
    {
    this.emp.editDetails(employeeObject,this.id).subscribe();
    }
    else{  
      this.emp.postDetails(employeeObject).subscribe();
    }
  }

  /**
   * This function will retrieve data from JSON
   * @param empId This is the employee of a particular employee
   */
  public getEmployee(empId) 
  {
    this.getDataEmployee$ = this.emp.getById(empId);
  }   
}
