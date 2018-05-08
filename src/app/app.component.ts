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
    inputEl.setAttribute('confirm-button-text', 'Send it!');
    inputEl.setAttribute('cancel-button-text', 'On second thought...');
    inputEl.setAttribute('max-length', '10');
    inputEl.addEventListener('confirm', (event: CustomEvent) => this.popAlert(event.detail));
    document.body.appendChild(inputEl);
  }

  popAlert(fieldText: string) {
    window.alert(fieldText);
  }
}
