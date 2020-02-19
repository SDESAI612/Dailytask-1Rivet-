import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesListPresentation } from './employees-list-presentation';

describe('EmployeesListPresentation', () => {
  let component: EmployeesListPresentation;
  let fixture: ComponentFixture<EmployeesListPresentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesListPresentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesListPresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
