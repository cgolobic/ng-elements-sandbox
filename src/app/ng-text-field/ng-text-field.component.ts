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
  @Input() validators = [];
  @Input() confirmButtonText = 'Submit';
  @Input() cancelButtonText = 'Clear';

  constructor() { }

  ngOnInit() {
    const validators: any[] = this.validators
      .map(this._mapValidator)
      .filter((validator) => validator !== undefined);
    console.log(validators);
    this.textField = new FormControl('', validators);
  }

  private _mapValidator(validatorParam: IValidatorParameter) {
    switch (validatorParam.name) {
      case 'minLength':
        return Validators.minLength(validatorParam.value);
      case 'maxLength':
        return Validators.maxLength(validatorParam.value);
      case 'required':
        return Validators.required;
    }
  }
}
