import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ng-text-field',
  templateUrl: './ng-text-field.component.html',
  styleUrls: ['./ng-text-field.component.css']
})
export class NgTextFieldComponent implements OnInit {
  public textField = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
