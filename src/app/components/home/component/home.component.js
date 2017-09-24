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
var core_1 = require("@angular/core");
var globelHandler_service_1 = require("../../../service/globelHandler.service");
var physician_model_1 = require("../../../models/physician.model");
var HomeComponent = (function () {
    function HomeComponent(globel) {
        this.globel = globel;
        this.times = ['This Week', 'Last Month', 'Last Month', '3 Month', '6 Month', 'Year'];
        this.setNavLink();
    }
    HomeComponent.prototype.updatetime = function (value) {
        console.log(value);
    };
    HomeComponent.prototype.setNavLink = function () {
        var list = new Array();
        list.push(new physician_model_1.NavList('/', 'Home'));
        this.globel.addHeaders(list);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "app/components/home/view/home.view.html",
        styles: [".row{\n            margin-left:0px;\n        }"]
    }),
    __metadata("design:paramtypes", [globelHandler_service_1.GlobalEventsManager])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map