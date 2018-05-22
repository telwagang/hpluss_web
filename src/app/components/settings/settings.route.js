"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var not_found_compontent_1 = require("../../components/aaa/componets/not-found-compontent");
var settings_component_1 = require("./settings.component");
var index_1 = require("./settingsComponents/index");
exports.settingsRoutes = [
    {
        path: '',
        component: settings_component_1.SettingComponent,
        children: [
            {
                path: 'administrative',
                component: index_1.AdministrativeComponent
            },
            {
                path: 'resources',
                component: index_1.ResourcesComponent
            },
            {
                path: 'resources/specialty',
                component: index_1.SpecialtyComponent
            },
            {
                path: 'system',
                component: index_1.SystemComponent
            },
            { path: '**', component: not_found_compontent_1.PageNotFoundComponent }
        ]
    }
];
//# sourceMappingURL=settings.route.js.map