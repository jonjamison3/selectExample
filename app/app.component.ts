import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <h1>My Angular2 App for Select/OnChange</h1>
  <select [(ngModel)]="testResult">
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
