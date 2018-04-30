import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { IValidatorParameter } from '../types/validator-parameter';
import { AbstractControlOptions } from '@angular/forms/src/model';

@Component({
  selector: 'app-ng-text-field',
  templateUrl: './ng-text-field.component.html',
  styleUrls: ['./ng-text-field.component.css']
})
export class NgTextFieldComponent implements OnInit {
  public textField: FormControl;
  @Input() maxlength = 140;
  @Input() required = true;
  @Input() confirmbuttontext = 'Submit';
  @Input() cancelbuttontext = 'Clear';

  constructor() { }

  ngOnInit() {
    const fieldValidators = [
      Validators.maxLength(this.maxlength)
    ];
    if (this.required) {
      fieldValidators.push(Validators.required);
    }
    this.textField = new FormControl('', fieldValidators);
  }
}
