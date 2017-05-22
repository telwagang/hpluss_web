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
var io = require("socket.io-client");
var Subject_1 = require("rxjs/Subject");
var app_service_1 = require("./app.service");
var SocketIO = (function () {
    function SocketIO(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:1337';
        this.socket = io(this.url);
        this._ioMessage$ = new Subject_1.Subject();
        //this.registerSailsListener();
    }
    Object.defineProperty(SocketIO.prototype, "ioMessage$", {
        get: function () {
            return this._ioMessage$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    SocketIO.prototype.registerSailsListener = function () {
        return this.http.get('/sockect/all');
        /*this.socket.on('appointment', (data: any) => {
            this._ioMessage$.next(data.data);
        });*/
    };
    SocketIO.prototype.subscribeToSails = function () {
        this.socket.send('/socket/join');
        this._ioMessage$.next({
            message: "Joined Chat Room"
        });
    };
    SocketIO.prototype.unsubscribeToSails = function () {
        self["io"].socket.get('/socket/leave');
        this._ioMessage$.next({
            message: "Left Chat Room"
        });
    };
    SocketIO.prototype.sendMessage = function (path, message) {
        this.socket.emit(path, message);
    };
    return SocketIO;
}());
SocketIO = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [app_service_1.DataService])
], SocketIO);
exports.SocketIO = SocketIO;
//# sourceMappingURL=socket-io.service.js.map