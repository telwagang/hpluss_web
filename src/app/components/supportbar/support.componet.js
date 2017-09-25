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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var globelHandler_service_1 = require("../../service/globelHandler.service");
var SupportComponent = /** @class */ (function () {
    function SupportComponent(globel) {
        var _this = this;
        this.globel = globel;
        this.globel.showNavBarEmitter.subscribe(function (mode) {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                _this.showSideBar = mode;
            }
        });
    }
    SupportComponent = __decorate([
        core_1.Component({
            templateUrl: "./support.html"
        }),
        __metadata("design:paramtypes", [globelHandler_service_1.GlobalEventsManager])
    ], SupportComponent);
    return SupportComponent;
}());
exports.SupportComponent = SupportComponent;
//# sourceMappingURL=support.componet.js.map