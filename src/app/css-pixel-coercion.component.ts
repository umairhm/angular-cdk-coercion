import { Component, Input } from '@angular/core';
import { coerceCssPixelValue } from '@angular/cdk/coercion';

@Component({
  selector: 'css-pixel-coercion',
  template: `
    <div class="default" [style.padding]="cssPixel">
      Hello Coercion, this div has {{ cssPixel || 'default' }} padding!
    </div>
  `,
  styles: [`
    .default {
      padding: 16px;
      border: 1px solid;
    }
  `]
})
export class CssPixelCoercionComponent  {
  // Declare private properties to hold coerced pixel value
  private _coercedPixel: string;

  // Use getters to return private properties
  // Use setters to call coerceArray method and convert passed values to arrays
  @Input()
  get cssPixel(): string {
    return this._coercedPixel;
  }
  set cssPixel(val: string) {
    this._coercedPixel = coerceCssPixelValue(val);
  }
}
