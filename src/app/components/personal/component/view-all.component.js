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
var router_1 = require("@angular/router");
var view_all_service_1 = require("../service/view-all.service");
var ViewComponent = (function () {
    function ViewComponent(service, 
        //private route: ActivatedRoute,
        router) {
        this.service = service;
        this.router = router;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPhysicians().then(function (physician) {
            _this.physicians = physician;
            _this.physician = physician[0];
        });
    };
    ViewComponent.prototype.isSelected = function (physician) { return physician.id === this.selectedId; };
    ViewComponent.prototype.onSelect = function (hero) {
        this.router.navigate(['/hero', hero.id]);
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    core_1.Component({
        templateUrl: "app/components/personal/view/view-all.view.html"
    }),
    __metadata("design:paramtypes", [view_all_service_1.ViewService,
        router_1.Router])
], ViewComponent);
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view-all.component.js.map