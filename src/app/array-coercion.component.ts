import { Component, Input } from '@angular/core';
import { coerceArray } from '@angular/cdk/coercion';

import { Person } from './person.interface';

@Component({
  selector: 'array-coercion',
  templateUrl: './array-coercion.component.html'
})
export class ArrayCoercionComponent  {
  /* Start: Example code for an array of strings */
  private _coercedStringArray: Array<string>;
  get coercedStringArray(): Array<string> {
    return this._coercedStringArray;
  }
  
  @Input()
  set strings(val: string | Array<string>) {
    this._coercedStringArray = coerceArray(val);
  }
  /* End: Example code for an array of strings */

  /* Start: Example code for an array of a custom type Person */
  private _coercedPersonArray: Array<Person>;
  get coercedPersonArray(): Array<Person> {
    return this._coercedPersonArray;
  }

  @Input()
  set persons(val: Person | Array<Person>) {
    this._coercedPersonArray = coerceArray(val);
  }
  /* End: Example code for an array of a custom type Person */
}
