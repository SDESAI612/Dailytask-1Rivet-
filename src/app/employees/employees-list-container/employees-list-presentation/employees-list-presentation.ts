import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../employee.model';


@Component({
  selector: 'app-employees-list-presentation',
  templateUrl: './employees-list-presentation.html',
  styleUrls: ['./employees-list-presentation.scss']
})
export class EmployeesListPresentation implements OnInit {

  id:number;
  // @Input() employees$ : Observable<Employee[]>;
  @Input() empObj;
  @Output() deleteEvent = new EventEmitter<number>();
  
  constructor() { 
    // console.log(this.employees$);
  }

  ngOnInit() {
  
  }

  /**
   * This function will delete the employee at particular id
   * @param id This take employee id as parameter
   */
  idDelete(id:number): void
  {
    // debugger;
    this.deleteEvent.emit(id); 
  }

  editData(employeeId: number)
  {
    
  }
}
