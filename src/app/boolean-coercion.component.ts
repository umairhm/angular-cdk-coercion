import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'boolean-coercion',
  template: `
    This is a coerced boolean: <strong>{{someFlag}}</strong>
  `
})
export class BooleanCoercionComponent  {
  // Declare private properties to hold coerced boolean value
  private _coercedBoolean: boolean;

  // Use getter to return private property
  // Use setter to call coerceArray method and convert passed value to boolean
  @Input()
  get someFlag(): boolean {
    return this._coercedBoolean;
  }
  set someFlag(val: boolean) {
    this._coercedBoolean = coerceBooleanProperty(val);
  }
}
