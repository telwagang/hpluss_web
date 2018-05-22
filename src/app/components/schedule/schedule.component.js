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
var schedule_service_1 = require("./service/schedule.service");
var globelHandler_service_1 = require("../../service/globelHandler.service");
var physician_model_1 = require("../../models/physician.model");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(ds, global) {
        this.ds = ds;
        this.global = global;
        this.days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // schedule: Observable< ScheduleModel[]>;
        this.schedule = [];
        this.setNavLink();
    }
    ScheduleComponent.prototype.selectperiod = function (value) {
        this.getday(value);
    };
    ScheduleComponent.prototype.ngOnInit = function () {
        this.getday();
    };
    ;
    ScheduleComponent.prototype.setNavLink = function () {
        var list = new Array(new physician_model_1.NavList('/home', 'Home'), new physician_model_1.NavList('/add', 'Add'), new physician_model_1.NavList('/delete', 'Delete'), new physician_model_1.NavList('/schudele', 'Refresh'));
        this.global.addHeaders(list);
    };
    ScheduleComponent.prototype.getday = function (day) {
        var _this = this;
        this.global.isLoad(true);
        if (!day) {
            day = this.getDayName(new Date());
        }
        console.log(day);
        this.ds.getSchedule(day).subscribe(function (data) {
            if (data) {
                _this.schedule = data;
                _this.global.isLoad(false);
            }
        }, function (error) {
            console.log(error);
            _this.global.isLoad(false);
        });
    };
    ScheduleComponent.prototype.getDayName = function (time) {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        return weekday[time.getDay()];
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: "schedule",
            templateUrl: "./schedule.view.html",
            styles: [" \n\n        \n        "],
            providers: [schedule_service_1.ScheduleService]
        }),
        __metadata("design:paramtypes", [schedule_service_1.ScheduleService,
            globelHandler_service_1.GlobalEventsManager])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;
//# sourceMappingURL=schedule.component.js.map