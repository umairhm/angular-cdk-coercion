import { Component, Input } from '@angular/core';
import { coerceArray } from '@angular/cdk/coercion';

import { Person } from './person.interface';

@Component({
  selector: 'array-coercion',
  template: `
    <ul>
      <li *ngFor="let item of coercedStringArray">
        This is {{ item }}
      </li>
    </ul>
    <ul>
      <li *ngFor="let person of coercedPersonArray">
        {{ person.name }} is {{person.age}} years old
      </li>
    </ul>
  `
})
export class ArrayCoercionComponent  {
  // Declare private properties to hold coerced arrays
  private _coercedStringArray: Array<string>;
  private _coercedPersonArray: Array<Person>;

  // Allow both singular and array values to be passed
  // Use coerceArray method to convert singular to array
  @Input()
  set strings(val: string | Array<string>) {
    this._coercedStringArray = coerceArray(val);
  }

  @Input()
  set persons(val: Person | Array<Person>) {
    this._coercedPersonArray = coerceArray(val);
  }
  
  // Use getters to return coerced arrays to be used in templates
  get coercedStringArray(): Array<string> {
    return this._coercedStringArray;
  }

  get coercedPersonArray(): Array<Person> {
    return this._coercedPersonArray;
  }
}
