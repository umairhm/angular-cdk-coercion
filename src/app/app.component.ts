import { Component } from '@angular/core';

import { Person } from './person.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  // Array coercion data
  person1 = {
    name: 'John Smith',
    age: 35
  };

  person2 = {
    name: 'Ada Lovelace',
    age: 36
  };

  person3 = {
    name: 'Captain America',
    age: 33
  };

  // boolean coercion data
  booleanValue = true;
  nullValue = null;
  undefinedValue = undefined;
}
