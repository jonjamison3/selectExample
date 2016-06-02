import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>My... fourth(?) Angular 2 App</h1>
  <select [(ngModel)]="testResult" (change)="changeFunction()">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
    <option>Option 6</option>
  </select>
  <h2>{{testResult}}</h2>
  `,
})
export class AppComponent {
testResult: String;


changeFunction(){
  console.log("here is a message including " + this.testResult);
}

ngOnInit(){
  console.log("here is a message");
};

_constructor(){
  this.testResult = "";
};

}
