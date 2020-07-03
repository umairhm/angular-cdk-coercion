import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Person } from './person.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  nullValue = null;
  undefinedValue = undefined;

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
  booleanTrue = true;
  booleanFalse = false;

  // element coercion
  htmlElement: HTMLElement;
  @ViewChild('h1', { read: ElementRef, static: true }) elementRef: ElementRef;

  ngOnInit() {
    this.htmlElement = document.createElement('p');
    this.htmlElement.innerHTML = 
      'This is a <strong>vanilla</strong> HTMLParagraphElement';
  }
}
