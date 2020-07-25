import { Component, ElementRef, Input } from '@angular/core';
import { coerceElement } from '@angular/cdk/coercion';

@Component({
  selector: 'element-coercion',
  template: `
    <div>
      <p><strong>elementOne</strong></p>
      <div [innerHTML]="elementOne.innerHTML"></div>
      <p><strong>coercedElementTwo</strong></p>
      <div [innerHTML]="coercedElementTwo.innerHTML"></div>
    </div>
  `
})
export class ElementCoercionComponent  {
  // In the following code, `@Input elementOne` will NOT work with strict type checking
  // But we'll make the `@Input elementTwo` to work with strict type checking as well
  
  // Declare private properties to hold coerced elements
  private _elementOne: Element;
  private _elementTwo: Element;

  // We have to separate this getter and name it differently to be used in the template
  // This works in combination with the `@Input set elementTwo` defined on line 36
  get coercedElementTwo(): Element {
    return this._elementTwo;
  }

  // Use setter to call coerceElement method and convert passed value to Element
  @Input()
  get elementOne(): Element {
    return this._elementOne;
  }
  set elementOne(val: Element) {
    this._elementOne = coerceElement(val);
  }

  // Note that the val parameter excepts value of type 'Element | ElementRef'
  // We have to do this for strict type checking to work properly
  @Input()
  set elementTwo(val: Element | ElementRef) {
    this._elementTwo = coerceElement(val);
  }
}
