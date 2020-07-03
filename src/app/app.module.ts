import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArrayCoercionComponent } from './array-coercion.component';
import { BooleanCoercionComponent } from './boolean-coercion.component';
import { CssPixelCoercionComponent } from './css-pixel-coercion.component';
import { ElementCoercionComponent } from './element-coercion.component';
import { NumberCoercionComponent } from './number-coercion.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    ArrayCoercionComponent,
    BooleanCoercionComponent,
    CssPixelCoercionComponent,
    ElementCoercionComponent,
    NumberCoercionComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
