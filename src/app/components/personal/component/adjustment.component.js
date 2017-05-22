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
var physician_model_1 = require("../../../models/physician.model");
var AdjustmentComponent = (function () {
    function AdjustmentComponent() {
        this.duration = [
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 2, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
            new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new physician_model_1.DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date)
        ];
        this.days = ['Monday', 'Tuesday', 'Wenseday', 'thursday', 'friday', 'saturday'];
    }
    AdjustmentComponent.prototype.changeValue = function (event, D) {
        console.log(D);
    };
    return AdjustmentComponent;
}());
AdjustmentComponent = __decorate([
    core_1.Component({
        selector: "adjustment",
        templateUrl: "app/components/personal/view/adjustment.view.html",
        styles: ["\n        .box{\n            width:30px;\n            padding:0px !important;\n            background: #f2f2f2;\n    border: 1px solid #dadada;\n    text-align: center;\n}\n        .full{\n            width:100%;\n        }\n            \n        }\n        thead,tbody{\n            display:block;\n        }\n        \n    "]
    }),
    __metadata("design:paramtypes", [])
], AdjustmentComponent);
exports.AdjustmentComponent = AdjustmentComponent;
//# sourceMappingURL=adjustment.component.js.map