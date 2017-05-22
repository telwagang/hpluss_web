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
var socket_io_service_1 = require("../../service/socket-io.service");
var AppointmentComponent = (function () {
    function AppointmentComponent(io, _changeDetector) {
        this.io = io;
        this._changeDetector = _changeDetector;
        this.appointment = new Array();
    }
    AppointmentComponent.prototype.ngOnInit = function () {
        this.mak();
        //this.subscribeClick();
        // this.getappoimnets();
    };
    /*
        getappoimnets() {
            this.io.on('appointment', (data: any) => {
                if (data) {
                    console.log(data);
                    this.appointment.push(data);
                    this.num = this.appointment.length;
                } else {
                    console.log(data);
                }
            });
        };*/
    AppointmentComponent.prototype.mak = function () {
        var _this = this;
        this.io.registerSailsListener()
            .subscribe(function (message) {
            console.log(message);
            _this.appointment = message;
            _this.num = message.length;
            _this._changeDetector.detectChanges();
        });
    };
    AppointmentComponent.prototype.subscribeClick = function () {
        //submit a change to the observable through the service
        this.io.subscribeToSails();
    };
    AppointmentComponent.prototype.unsubClick = function () {
        this.io.unsubscribeToSails();
    };
    return AppointmentComponent;
}());
AppointmentComponent = __decorate([
    core_1.Component({
        selector: "appointment",
        templateUrl: "./appointment.view.html",
        styles: ["\n            .bottom{\n                clear:both;\n            }\n        "]
    }),
    __metadata("design:paramtypes", [socket_io_service_1.SocketIO, core_1.ChangeDetectorRef])
], AppointmentComponent);
exports.AppointmentComponent = AppointmentComponent;
//# sourceMappingURL=appoinment.component.js.map