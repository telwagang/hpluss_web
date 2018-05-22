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
var router_1 = require("@angular/router");
var globelHandler_service_1 = require("../../service/globelHandler.service");
var authentication_service_1 = require("../login/service/authentication.service");
var NavComponent = /** @class */ (function () {
    function NavComponent(router, globel, auth) {
        this.router = router;
        this.globel = globel;
        this.auth = auth;
        this.showbar();
        this.spin();
        this.SubMenuList();
    }
    NavComponent.prototype.spin = function () {
        var _this = this;
        this.globel.loadingEmitter.subscribe(function (mode) {
            _this.shouldspin = mode;
        });
    };
    NavComponent.prototype.showbar = function () {
        var _this = this;
        this.globel.showNavBarEmitter.subscribe(function (mode) {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                _this.showNavBar = mode;
                var data = _this.globel.getUser();
                _this.user = data;
            }
        });
    };
    NavComponent.prototype.SubMenuList = function () {
        var _this = this;
        this.globel.subMenuEmitter.subscribe(function (list) {
            _this.navlist = list;
        });
    };
    NavComponent.prototype.logout = function () {
        this.auth.logout();
        this.globel.showNavBar(false);
        this.router.navigate(["/login"]);
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: "ActiveBar",
            templateUrl: "./nav.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            globelHandler_service_1.GlobalEventsManager,
            authentication_service_1.AuthenticationService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map