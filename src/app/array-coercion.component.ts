import { Component, Input } from '@angular/core';
import { coerceArray } from '@angular/cdk/coercion';

import { Person } from './person.interface';

@Component({
  selector: 'array-coercion',
  template: `
    <ul>
      <li *ngFor="let item of strings">
        This is {{ item }}
      </li>
    </ul>
    <ul>
      <li *ngFor="let person of coercedPersons">
        {{ person.name }} is {{person.age}} years old
      </li>
    </ul>
  `
})
export class ArrayCoercionComponent  {
  // In the following code, `@Input strings` will NOT work with strict type checking
  // But we'll make the `@Input persons` to work with strict type checking as well
  
  // Declare private properties to hold coerced arrays
  private _stringArray: Array<string>;
  private _personArray: Array<Person>;
  
  // We have to separate this getter and name it differently to be used in the template
  // This works in combination with the `@Input set persons` defined on line 36
  get coercedPersons(): Array<Person> {
    return this._personArray;
  }

  // Use setter to call coerceArray method and convert passed values to arrays
  @Input()
  get strings(): Array<string> {
    return this._stringArray;
  }
  set strings(val: Array<string>) {
    this._stringArray = coerceArray(val);
  }

  // Note that the val parameter excepts a non-array value as well
  // We have to do this for strict type checking to work properly
  // If we don't do this, following error will be thrown:
  // Type 'Person' is not assignable to type 'Person[]'.
  @Input()
  set persons(val: Person | Array<Person>) {
    this._personArray = coerceArray(val);
  }
}
