"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var app_component_1 = require("../componets/app.component");
var app_route_1 = require("../route/app.route");
var personal_module_1 = require("../../personal/personal.module");
var home_module_1 = require("../../home/home.module");
var not_found_module_1 = require("./not-found.module");
var schedule_module_1 = require("../../schedule/module/schedule.module");
var login_module_1 = require("../../login/login.module");
var http_1 = require("@angular/http");
var theme_module_1 = require("../../topbar/theme.module");
var app_service_1 = require("../../../service/app.service");
var socket_io_service_1 = require("../../../service/socket-io.service");
var globelHandler_service_1 = require("../../../service/globelHandler.service");
var base_service_1 = require("../../../service/base.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                theme_module_1.ThemeModule,
                login_module_1.LoginModule,
                personal_module_1.PersonalModule,
                home_module_1.HomeModule,
                app_route_1.AppRouteModule,
                not_found_module_1.NotFoundModule,
                schedule_module_1.ScheduleModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [globelHandler_service_1.GlobalEventsManager, app_service_1.DataService, socket_io_service_1.SocketIO,
                ,
                base_service_1.requestOptionsProvider],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map