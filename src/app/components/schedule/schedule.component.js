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
var schedule_service_1 = require("./service/schedule.service");
var ScheduleComponent = (function () {
    function ScheduleComponent(ds) {
        this.ds = ds;
        this.days = ['Monday', 'Tuesday', 'Wenseday', 'thursday', 'friday', 'saturday'];
        // schedule: Observable< ScheduleModel[]>;
        this.schedule = [];
    }
    ScheduleComponent.prototype.selectperiod = function (value) {
    };
    ScheduleComponent.prototype.ngOnInit = function () {
        this.ds.getSchedule().subscribe(function (data) {
            if (data) {
                console.log(data);
            }
        });
    };
    return ScheduleComponent;
}());
ScheduleComponent = __decorate([
    core_1.Component({
        selector: "schedule",
        templateUrl: "./schedule.view.html",
        styles: [" \n\n        \n        "],
        providers: [schedule_service_1.ScheduleService]
    }),
    __metadata("design:paramtypes", [schedule_service_1.ScheduleService])
], ScheduleComponent);
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map