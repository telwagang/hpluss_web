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
var forms_1 = require("@angular/forms");
var PhysicianComponent = (function () {
    function PhysicianComponent(fb) {
        this.fb = fb;
        this.days = ['Monday', 'Tuesday', 'Wenseday', 'thursday', 'friday', 'saturday'];
        this.times = ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Full'];
        this.physician = this.fb.group({
            email: ['', forms_1.Validators.required],
            confirm: ['', forms_1.Validators.required],
            licenseNo: [''],
            firstName: ['', forms_1.Validators.required],
            middleName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            specialty: ['', forms_1.Validators.required],
            registrationNo: ['', forms_1.Validators.minLength(6)],
            comfirmpassword: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.minLength(7)]
        });
    }
    PhysicianComponent.prototype.ngOnInit = function () {
    };
    PhysicianComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    return PhysicianComponent;
}());
PhysicianComponent = __decorate([
    core_1.Component({
        selector: 'physician',
        templateUrl: "app/components/personal/view/physician.view.html",
        styles: ["\n        button{\n            margin-top: 20px;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], PhysicianComponent);
exports.PhysicianComponent = PhysicianComponent;
//# sourceMappingURL=physician.component.js.map