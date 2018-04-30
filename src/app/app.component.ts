import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const inputEl = document.createElement('ng-text-field');
    inputEl.setAttribute('confirmbuttontext', 'OK!');
    inputEl.setAttribute('cancelbuttontext', 'Nah...');
    document.body.appendChild(inputEl);
  }
}
