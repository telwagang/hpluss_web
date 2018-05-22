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
var physician_model_1 = require("../../models/physician.model");
var SettingComponent = /** @class */ (function () {
    function SettingComponent(global) {
        this.global = global;
        this.setNavLink();
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent.prototype.setNavLink = function () {
        var list = new Array(new physician_model_1.NavList('/home', 'home'), new physician_model_1.NavList('/administrative', 'Administrative'), new physician_model_1.NavList('/resources', 'Resources'), new physician_model_1.NavList('/system', 'System'), new physician_model_1.NavList('/settings', 'Refresh'));
        this.global.addHeaders(list);
    };
    SettingComponent = __decorate([
        core_1.Component({
            selector: "settings",
            templateUrl: "./settings.html"
        }),
        __metadata("design:paramtypes", [globelHandler_service_1.GlobalEventsManager])
    ], SettingComponent);
    return SettingComponent;
}());
exports.SettingComponent = SettingComponent;
//# sourceMappingURL=settings.component.js.map