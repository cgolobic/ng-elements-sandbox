import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { NgTextFieldComponent } from './ng-text-field/ng-text-field.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NgTextFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  entryComponents: [ NgTextFieldComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const textFieldElement = createCustomElement(NgTextFieldComponent, { injector });
    customElements.define('ng-text-field', textFieldElement);
  }
}
