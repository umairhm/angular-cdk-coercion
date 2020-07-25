import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'boolean-coercion',
  template: `
    <p>This is uncoerced boolean: <strong>{{flagOne}}</strong></p>
    <p>This is coerced boolean: <strong>{{coercedFlagTwo}}</strong></p>
  `
})
export class BooleanCoercionComponent  {
  // In the following code, `@Input flagOne` will NOT work with strict type checking
  // But we'll make the `@Input flagTwo` to work with strict type checking as well
  
  // Declare private properties to hold coerced booleans
  private _flagOne: boolean;
  private _flagTwo: boolean;

  // We have to separate this getter and name it differently to be used in the template
  // This works in combination with the `@Input set flagTwo` defined on line 36
  get coercedFlagTwo(): boolean {
    return this._flagTwo;
  }

  // Use setter to call coerceBooleanProperty method and convert passed values to boolean
  @Input()
  get flagOne(): boolean {
    return this._flagOne;
  }
  set flagOne(val: boolean) {
    this._flagOne = coerceBooleanProperty(val);
  }

  // Note that the val parameter excepts value of type 'any'
  // We have to do this for strict type checking to work properly
  // If we don't do this, following (or similar) error will be thrown:
  // Type 'string' is not assignable to type 'boolean'.
  @Input()
  set flagTwo(val: any) {
    this._flagTwo = coerceBooleanProperty(val);
  }
}
