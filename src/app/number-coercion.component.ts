import { Component, Input } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'number-coercion',
  template: `
    <div>
      <p><strong>numberOne</strong></p>
      <div>{{ numberOne }}</div>
      <p><strong>numberTwo</strong></p>
      <div>{{ coercedNumberTwo }}</div>
    </div>
  `
})
export class NumberCoercionComponent  {
  // In the following code, `@Input numberOne` will NOT work with strict type checking
  // But we'll make the `@Input numberTwo` to work with strict type checking as well
  
  // Declare private properties to hold coerced numbers
  private _numberOne: number;
  private _numberTwo: number;

  // We have to separate this getter and name it differently to be used in the template
  // This works in combination with the `@Input set numberTwo` defined on line 36
  get coercedNumberTwo(): number {
    return this._numberTwo;
  }

  // Use setter to call coerceNumberProperty method and convert passed value to number
  @Input()
  get numberOne(): number {
    return this._numberOne;
  }
  set numberOne(val: number) {
    this._numberOne = coerceNumberProperty(val);
  }

  // Note that the val parameter excepts value of type 'any'
  // We have to do this for strict type checking to work properly
  // 'coerceNumberProperty' method takes a second parameter
  // The second parameter is the fallback or default value
  @Input()
  set numberTwo(val: any) {
    this._numberTwo = coerceNumberProperty(val, 12);
  }
}
