import { Component, Input } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'number-coercion',
  template: `
    This is a coerced number: <strong>{{count}}</strong>
  `
})
export class NumberCoercionComponent  {
  // Declare private properties to hold coerced number value
  private _coercedNumber: number;

  // Use getters to return private property
  // Use setters to call coerceNumberProperty method and convert passed value to number
  @Input()
  get count(): number {
    return this._coercedNumber;
  }
  set count(val: number) {
    this._coercedNumber = coerceNumberProperty(val);
  }
}
