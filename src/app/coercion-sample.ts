import { Component, Input } from '@angular/core';

@Component({
  selector: 'number-coercion',
  template: `...`
})
export class NumberCoercionComponent  {
  @Input() numberOne: number;
  @Input() numberTwo: number;
}
