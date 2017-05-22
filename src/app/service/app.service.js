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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.IpAddress = 'http://127.0.0.1:1337';
    }
    DataService.prototype.get = function (path, options) {
        return this.http.get(this.IpAddress + path, this.jwt())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.getraw = function (path, options) {
        return this.http.get(this.IpAddress + path + options, this.jwt());
    };
    DataService.prototype.post = function (path, data) {
        return this.http.post(this.IpAddress + path, { data: data }, this.jwt())
            .map(this.extractData)
            .catch(this.handleError);
    };
    DataService.prototype.update = function (path, data) {
        return this.http.put(this.IpAddress + path, data, this.jwt()).map(function (response) { return response.json(); });
    };
    DataService.prototype.delete = function (path) {
        return this.http.delete(path, this.jwt()).map(function (response) { return response.json(); });
    };
    DataService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DataService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    DataService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: headers });
        }
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=app.service.js.map