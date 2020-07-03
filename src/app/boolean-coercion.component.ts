import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'boolean-coercion',
  template: `
    This is a coerced boolean: <strong>{{coercedBoolean}}</strong>
  `
})
export class BooleanCoercionComponent  {
  // Declare private property to hold coerced value 
  private _coercedBoolean: boolean;

  // Allow boolean, string, null or undefined to be passed
  @Input()
  set someFlag(val: string | boolean) {
    this._coercedBoolean = coerceBooleanProperty(val);
  }
  
  // Use getters to return coerced arrays to be used in templates
  get coercedBoolean(): boolean {
    return this._coercedBoolean;
  }
}
