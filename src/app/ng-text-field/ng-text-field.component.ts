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
  @Input() maxlength = 140;
  @Input() required = true;
  @Input() confirmbuttontext = 'Submit';
  @Input() cancelbuttontext = 'Clear';
  @Output() confirm = new EventEmitter<string>();

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

  clear() {
    this.textField.setValue('');
  }
}
