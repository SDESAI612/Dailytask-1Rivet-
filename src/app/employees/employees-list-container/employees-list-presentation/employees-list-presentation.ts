import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from '../../employee.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employees-list-presentation-ui',
  templateUrl: './employees-list-presentation.html',
  styleUrls: ['./employees-list-presentation.scss']
})
export class EmployeesListPresentation implements OnInit {

  public id:number;
  @Input() public empObj$:Observable<Employee[]>;
  @Output() delete;  
  @Output() searchQuery; 

  constructor() { 
    this.delete = new EventEmitter<number>();
    this.searchQuery = new EventEmitter<string>();
  }

  ngOnInit() {
    
  }

  /**
   * This function will delete the employee at particular id
   * @param id This take employee id as parameter
   */
  idDelete(id:number): void
  {
    this.delete.emit(id); 
  }

  /**
   * This function will search for record
   * @param searchText This will send the query to container
   */
  searchData(searchText)
  {
  this.searchQuery.emit(searchText);
  }
}
