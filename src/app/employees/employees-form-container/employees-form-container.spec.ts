import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFormContainer } from './employees-form-container';

describe('EmployeesFormContainer', () => {
  let component: EmployeesFormContainer;
  let fixture: ComponentFixture<EmployeesFormContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesFormContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesFormContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
