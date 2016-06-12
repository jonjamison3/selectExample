"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.changeFunction = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        this.testResult = "";
        this.testResults = new Array();
    };
    ;
    AppComponent.prototype._constructor = function () {
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"col-xs-6 col-xs-offset-3\">\n    <h1>My Angular2 App for Select/OnChange</h1>\n    <select [(ngModel)]=\"testResult\">\n      <option>Option 1</option>\n      <option>Option 2</option>\n      <option>Option 3</option>\n      <option>Option 4</option>\n      <option>Option 5</option>\n      <option>Option 6</option>\n    </select>\n\n    <h2 class=\"important\" [hidden]=\"testResult==''\">{{testResult}} has been selected</h2>\n  </div>\n  <div class=\"col-xs-6 col-xs-offset-3 well\">\n    <div class=\"col-xs-6 col-xs-offset-3\">\n      <input type=\"text\" [(ngModel)]=\"testResults[0]\" placeholder=\"This is a field linked to array value 1\"/>\n      <input type=\"text\" [(ngModel)]=\"testResults[1]\" placeholder=\"This is a field linked to array value 2\"/>\n      <input type=\"text\" [(ngModel)]=\"testResults[2]\" placeholder=\"This is a field linked to array value 3\"/>\n      <input type=\"text\" [(ngModel)]=\"testResults[3]\" placeholder=\"This is a field linked to array value 4\"/>\n      <input type=\"text\" [(ngModel)]=\"testResults[4]\" placeholder=\"This is a field linked to array value 5\"/>\n    </div>\n    <div class=\"clearfix\"></div>\n\n\n    <h3>Arrays working just fine</h3>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">{{testResults[0]}}</li>\n      <li class=\"list-group-item\">{{testResults[1]}}</li>\n      <li class=\"list-group-item\">{{testResults[2]}}</li>\n      <li class=\"list-group-item\">{{testResults[3]}}</li>\n      <li class=\"list-group-item\">{{testResults[4]}}</li>\n    </ul>\n  </div>\n  <div class=\"col-xs-6 col-xs-offset-3\">\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map