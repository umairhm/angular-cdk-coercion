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

  // Use getters to return private properties
  // Use setters to call coerceArray method and convert passed values to arrays
  @Input()
  get someFlag(): boolean {
    return this._coercedBoolean;
  }
  set someFlag(val: boolean) {
    this._coercedBoolean = coerceBooleanProperty(val);
  }
}
