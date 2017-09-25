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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var GlobalEventsManager = /** @class */ (function () {
    function GlobalEventsManager() {
        this.init_loading();
        this.init_Navbar();
        this.init_SubMenu();
    }
    GlobalEventsManager.prototype.showNavBar = function (ifShow) {
        this._showNavBar.next(ifShow);
    };
    GlobalEventsManager.prototype.addHeaders = function (list) {
        this._subMenu.next(list);
    };
    GlobalEventsManager.prototype.getUser = function () {
        return localStorage.getItem('user_name');
    };
    GlobalEventsManager.prototype.isLoad = function (show) {
        this._loading.next(show);
    };
    // setting up the loading gif 
    GlobalEventsManager.prototype.init_loading = function () {
        // set up an observer subject 
        this._loading = new BehaviorSubject_1.BehaviorSubject(false);
        // add a listener to the subject 
        this.loadingEmitter = this._loading.asObservable();
    };
    // setting up auth state 
    GlobalEventsManager.prototype.init_Navbar = function () {
        // set up an observer subject 
        this._showNavBar = new BehaviorSubject_1.BehaviorSubject(null);
        // add a listener to the subject 
        this.showNavBarEmitter = this._showNavBar.asObservable();
    };
    // setting up the sub Menu Bar 
    GlobalEventsManager.prototype.init_SubMenu = function () {
        // set up an observer subject 
        this._subMenu = new BehaviorSubject_1.BehaviorSubject(null);
        // add a listener to the subject
        this.subMenuEmitter = this._subMenu.asObservable();
    };
    GlobalEventsManager = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GlobalEventsManager);
    return GlobalEventsManager;
}());
exports.GlobalEventsManager = GlobalEventsManager;
//# sourceMappingURL=globelHandler.service.js.map