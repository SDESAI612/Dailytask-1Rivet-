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

  empObj;
  // employeeDetails$ = new Observable<Employee[]>();

  constructor(private emp:EmployeesService) {
    this.GetDetails();
  }


  ngOnInit() {
  }

  /**
   * This function will get the data from JSON file 
   */
  GetDetails():void
  { 
    debugger
    this.emp.GetDetails().subscribe(
        data=> {
          this.empObj = data;
        }
    );
    // alert(JSON.stringify(this.employeeDetails$));
  //  console.log(JSON.stringify(this.employeeDetails$));
   
  }

  /**
   * 
   * @param id This will send the id of employee to the service 
   */
  idDelete(id:number): void
  {
    debugger
    this.emp.DeleteDetails(id).subscribe(()=>
    {
      this.GetDetails();
    });
  }

  searchData(searchData)
  {
    this.empObj = this.emp.searchData();
  }

}
