import { Component, ElementRef, Input } from '@angular/core';
import { coerceElement } from '@angular/cdk/coercion';

@Component({
  selector: 'element-coercion',
  template: `
    <div>
      <span>Is ElementRef: {{isElementRef}}</span>
      <div [innerHTML]="element.innerHTML"></div>
    </div>
  `
})
export class ElementCoercionComponent  {
  // Declare private properties to hold coerced element reference
  private _coercedElement: Element;

  isElementRef = false;

  // Use getters to return private properties
  // Use setters to call coerceElement method and convert passed values to native element
  @Input()
  get element(): Element {
    return this._coercedElement;
  }
  set element(val: Element) {
    this.isElementRef = val instanceof ElementRef;
    this._coercedElement = coerceElement(val);
  }
}
