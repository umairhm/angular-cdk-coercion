import { Component, Input } from '@angular/core';
import { coerceCssPixelValue } from '@angular/cdk/coercion';

@Component({
  selector: 'css-pixel-coercion',
  template: `
    <div class="default"
      [style.padding-left]="paddingX"
      [style.padding-right]="paddingX"
      [style.padding-top]="coercedPaddingY"
      [style.padding-bottom]="coercedPaddingY"
    >
      Hello Coercion, this div has paddingX = {{ paddingX }} and paddingY = {{ coercedPaddingY }}!
    </div>
  `,
  styles: [`
    .default {
      border: 1px solid;
    }
  `]
})
export class CssPixelCoercionComponent  {
  // In the following code, `@Input paddingX` will NOT work with strict type checking
  // But we'll make the `@Input paddingY` to work with strict type checking as well
  
  // Declare private properties to hold coerced booleans
  private _paddingX: string;
  private _paddingY: string;

  // We have to separate this getter and name it differently to be used in the template
  // This works in combination with the `@Input set paddingY` defined on line 36
  get coercedPaddingY(): string {
    return this._paddingY;
  }

  // Use setter to call coerceCssPixelValue method and convert passed values to pixel string
  @Input()
  get paddingX(): string {
    return this._paddingX;
  }
  set paddingX(val: string) {
    this._paddingX = coerceCssPixelValue(val);
  }

  // Note that the val parameter excepts value of type 'number | string'
  // We have to do this for strict type checking to work properly
  // If we don't do this, following error will be thrown:
  // Type 'number' is not assignable to type 'string'.
  @Input()
  set paddingY(val: any) {
    this._paddingY = coerceCssPixelValue(val);
  }
}
