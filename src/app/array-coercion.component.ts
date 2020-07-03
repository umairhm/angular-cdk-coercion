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
      <li *ngFor="let person of persons">
        {{ person.name }} is {{person.age}} years old
      </li>
    </ul>
  `
})
export class ArrayCoercionComponent  {
  // Declare private properties to hold coerced arrays
  private _stringArray: Array<string>;
  private _personArray: Array<Person>;

  // Use getters to return private properties
  // Use setters to call coerceArray method and convert passed values to arrays
  @Input()
  get strings(): Array<string> {
    return this._stringArray;
  }
  set strings(val: Array<string>) {
    this._stringArray = coerceArray(val);
  }

  @Input()
  get persons(): Array<Person> {
    return this._personArray;
  }
  set persons(val: Array<Person>) {
    this._personArray = coerceArray(val);
  }
}
