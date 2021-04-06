import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'project11';
  myProp = 'some string';
  myNumber = 10;
  isTrue = true;

  x = 0;
  y = 0;

  myInputValue = '123';

  myArray = [1, 2, 3, 4, 5, 6];

  arrayForStrings = [];
  myString = '';

  constructor() {
    setTimeout(() => {
      this.isTrue = false;
    }, 2000);
  }

  onMouseMove(event: MouseEvent) {
    this.x = event.offsetX;
    this.y = event.offsetY;
  }

  onAddStringToArray() {
    this.arrayForStrings.push(this.myString);
    this.myString = '';
  }
}
