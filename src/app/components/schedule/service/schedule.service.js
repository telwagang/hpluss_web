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
var app_service_1 = require("../../../service/app.service");
var socket_io_service_1 = require("../../../service/socket-io.service");
var ScheduleService = (function () {
    function ScheduleService(socket, ds) {
        this.socket = socket;
        this.ds = ds;
        this.pathschedule = '/sockect/appointment';
    }
    ScheduleService.prototype.getSchedule = function () {
        return this.socket.get(this.pathschedule);
    };
    ScheduleService.prototype.getScheduleold = function () {
        return this.ds.get(this.pathschedule, '').map(function (x) { return x; });
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [socket_io_service_1.SocketIO, app_service_1.DataService])
], ScheduleService);
exports.ScheduleService = ScheduleService;
//# sourceMappingURL=schedule.service.js.map