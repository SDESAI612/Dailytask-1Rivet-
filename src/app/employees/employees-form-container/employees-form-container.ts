import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service'

@Component({
  selector: 'app-employees-form-container',
  templateUrl: './employees-form-container.html',
  styleUrls: ['./employees-form-container.scss']
})
export class EmployeesFormContainer implements OnInit {

  constructor(private emp: EmployeesService) { }
  employees:FormGroup;
  ngOnInit() {
  }

  addData($event)
  { debugger
    this.employees=$event;
    this.emp.postDetails($event).subscribe();
  }
}
