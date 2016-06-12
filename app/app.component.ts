import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  <div class="col-xs-6 col-xs-offset-3">
    <h1>My Angular2 App for Select/OnChange</h1>
    <select [(ngModel)]="testResult">
      <option>Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
      <option>Option 4</option>
      <option>Option 5</option>
      <option>Option 6</option>
    </select>

    <h2 class="important" [hidden]="testResult==''">{{testResult}} has been selected</h2>
  </div>
  <div class="col-xs-6 col-xs-offset-3 well">
    <div class="col-xs-6 col-xs-offset-3">
      <input type="text" [(ngModel)]="testResults[0]" placeholder="This is a field linked to array value 1"/>
      <input type="text" [(ngModel)]="testResults[1]" placeholder="This is a field linked to array value 2"/>
      <input type="text" [(ngModel)]="testResults[2]" placeholder="This is a field linked to array value 3"/>
      <input type="text" [(ngModel)]="testResults[3]" placeholder="This is a field linked to array value 4"/>
      <input type="text" [(ngModel)]="testResults[4]" placeholder="This is a field linked to array value 5"/>
    </div>
    <div class="clearfix"></div>


    <h3>Arrays working just fine</h3>
    <ul class="list-group">
      <li class="list-group-item">{{testResults[0]}}</li>
      <li class="list-group-item">{{testResults[1]}}</li>
      <li class="list-group-item">{{testResults[2]}}</li>
      <li class="list-group-item">{{testResults[3]}}</li>
      <li class="list-group-item">{{testResults[4]}}</li>
    </ul>
  </div>
  <div class="col-xs-6 col-xs-offset-3">
  </div>
  `,
})
export class AppComponent implements OnInit{
  testResult: String;
  testResults: String[];

  changeFunction(){

  }

  ngOnInit(){
    this.testResult = "";
    this.testResults = new Array();
  };

  _constructor(){
  };

}
