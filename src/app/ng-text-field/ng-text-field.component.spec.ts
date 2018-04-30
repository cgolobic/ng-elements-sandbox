import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTextFieldComponent } from './ng-text-field.component';

describe('NgTextFieldComponent', () => {
  let component: NgTextFieldComponent;
  let fixture: ComponentFixture<NgTextFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTextFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTextFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
