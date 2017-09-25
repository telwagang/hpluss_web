"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var personal_component_1 = require("./component/personal.component");
var physician_component_1 = require("./component/physician.component");
var view_all_component_1 = require("./component/view-all.component");
var schedule_component_1 = require("./component/schedule.component");
var adjustment_component_1 = require("./component/adjustment.component");
var personal_route_1 = require("./personal.route");
var view_all_service_1 = require("./service/view-all.service");
var PersonalModule = /** @class */ (function () {
    function PersonalModule() {
    }
    PersonalModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                personal_route_1.PersonalRoutingModule
            ],
            declarations: [
                personal_component_1.PersonalComponent,
                adjustment_component_1.AdjustmentComponent,
                schedule_component_1.ScheduleComponent,
                physician_component_1.PhysicianComponent,
                view_all_component_1.ViewAllComponent
            ],
            providers: [view_all_service_1.ViewService]
        })
    ], PersonalModule);
    return PersonalModule;
}());
exports.PersonalModule = PersonalModule;
//# sourceMappingURL=personal.module.js.map