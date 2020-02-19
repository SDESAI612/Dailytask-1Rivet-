import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListContainer } from './employees-list-container';

describe('EmployeesListContainer', () => {
  let component: EmployeesListContainer;
  let fixture: ComponentFixture<EmployeesListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesListContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
