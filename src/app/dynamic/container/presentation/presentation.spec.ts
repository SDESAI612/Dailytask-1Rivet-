import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Presentation } from './presentation';

describe('PresentationComponent', () => {
  let component: Presentation
  let fixture: ComponentFixture<Presentation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Presentation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Presentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
