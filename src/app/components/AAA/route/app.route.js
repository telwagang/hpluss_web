"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var account_componet_1 = require("../../account/account.componet");
var home_component_1 = require("../../home/component/home.component");
var appoinment_component_1 = require("../../appoinment/appoinment.component");
var schedule_component_1 = require("../../schedule/schedule.component");
var settings_component_1 = require("../../settings/settings.component");
var login_componet_1 = require("../../login/componets/login.componet");
var personal_route_1 = require("../../personal/personal.route");
var not_found_compontent_1 = require("../componets/not-found-compontent");
var auth_guard_1 = require("../../../guards/auth.guard");
var nav_component_1 = require("../../topbar/nav.component");
var support_componet_1 = require("../../supportbar/support.componet");
var navbar_componet_1 = require("../../sidebar/navbar.componet");
var route = [
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'schudele',
        component: schedule_component_1.ScheduleComponent, canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'appointment',
        component: appoinment_component_1.AppointmentComponent, canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'personal',
        children: personal_route_1.heroesRoutes.slice()
    },
    {
        path: 'login',
        component: login_componet_1.LoginComponent
    },
    {
        path: 'account',
        component: account_componet_1.AccountComponent, canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'settings',
        component: settings_component_1.SettingComponent, canActivate: [auth_guard_1.AuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: nav_component_1.NavComponent, outlet: 'nav' },
    { path: '', component: navbar_componet_1.NavbarComponent, outlet: 'navbar' },
    { path: '', component: support_componet_1.SupportComponent, outlet: 'support' },
    { path: '**', component: not_found_compontent_1.PageNotFoundComponent }
];
var AppRouteModule = /** @class */ (function () {
    function AppRouteModule() {
    }
    AppRouteModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(route),
                //PersonalRoutingModule,
                common_1.CommonModule
            ],
            declarations: [
                appoinment_component_1.AppointmentComponent,
                account_componet_1.AccountComponent,
                settings_component_1.SettingComponent
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRouteModule);
    return AppRouteModule;
}());
exports.AppRouteModule = AppRouteModule;
//# sourceMappingURL=app.route.js.map