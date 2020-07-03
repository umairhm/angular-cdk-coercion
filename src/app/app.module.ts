import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArrayCoercionComponent } from './array-coercion.component';
import { BooleanCoercionComponent } from './boolean-coercion.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    ArrayCoercionComponent,
    BooleanCoercionComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
