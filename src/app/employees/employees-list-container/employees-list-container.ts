import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employees-list-container',
  templateUrl: './employees-list-container.html',
  styleUrls: ['./employees-list-container.scss']
})
export class EmployeesListContainer implements OnInit {

  public employeeDetails$:Observable<Employee[]>;

  constructor(private emp:EmployeesService) {
    this.GetDetails();
  }


  ngOnInit() {
  }

  /**
   * This function will get the data from JSON file 
   */
  public GetDetails():void
  { 
    this.employeeDetails$ = this.emp.GetDetails();
  }

  /**
   * This method delete the the record at a particular id 
   * @param id This will send the id of employee to the service 
   */
 public idDelete(id:number): void
  {
    this.emp.DeleteDetails(id).subscribe(()=>
    {
      this.GetDetails();
    });
  }

  /**
   * This method get the values searched from presentation
   * @param searchData This the query we search
   */
  public searchData(searchData)
  {
    this.employeeDetails$ = this.emp.searchData(searchData)
   
  }
}
