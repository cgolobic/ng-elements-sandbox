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
    inputEl.setAttribute('confirmbuttontext', 'Send it!');
    inputEl.setAttribute('cancelbuttontext', 'On second thought...');
    inputEl.setAttribute('maxlength', '10');
    inputEl.addEventListener('confirm', (event: CustomEvent) => this.popAlert(event.detail));
    document.body.appendChild(inputEl);
  }

  popAlert(fieldText: string) {
    window.alert(fieldText);
  }
}
