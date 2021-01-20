import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { login-formComponent } from './login-form/login-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    login-formComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

