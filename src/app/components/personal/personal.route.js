"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var personal_component_1 = require("./component/personal.component");
var physician_component_1 = require("./component/physician.component");
var view_all_component_1 = require("./component/view-all.component");
var schedule_component_1 = require("./component/schedule.component");
var adjustment_component_1 = require("./component/adjustment.component");
var not_found_compontent_1 = require("../../components/aaa/componets/not-found-compontent");
var heroesRoutes = [
    {
        path: 'personal',
        component: personal_component_1.PersonalComponent,
        children: [
            {
                path: '',
                component: view_all_component_1.ViewComponent
            },
            {
                path: 'physician',
                component: physician_component_1.PhysicianComponent
            },
            {
                path: 'physician:id',
                component: physician_component_1.PhysicianComponent
            },
            {
                path: 'schedule',
                component: schedule_component_1.ScheduleComponent
            },
            {
                path: 'adjustment',
                component: adjustment_component_1.AdjustmentComponent
            },
            { path: '**', component: not_found_compontent_1.PageNotFoundComponent }
        ]
    }
];
var PersonalRoutingModule = (function () {
    function PersonalRoutingModule() {
    }
    return PersonalRoutingModule;
}());
PersonalRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild(heroesRoutes)
        ],
        exports: [
            router_1.RouterModule
        ]
    })
], PersonalRoutingModule);
exports.PersonalRoutingModule = PersonalRoutingModule;
//# sourceMappingURL=personal.route.js.map