import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IValidatorParameter } from '../types/validator-parameter';

@Component({
  selector: 'app-ng-text-field',
  templateUrl: './ng-text-field.component.html',
  styleUrls: ['./ng-text-field.component.css']
})
export class NgTextFieldComponent implements OnInit {
  public textField: FormControl;
  @Input() maxLength = 140;
  @Input() required = true;
  @Input() confirmButtonText = 'Submit';
  @Input() cancelButtonText = 'Clear';
  @Output() confirm = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    const fieldValidators = [
      Validators.maxLength(this.maxLength)
    ];
    if (this.required) {
      fieldValidators.push(Validators.required);
    }
    this.textField = new FormControl('', fieldValidators);
  }

  clear() {
    this.textField.setValue('');
  }
}
