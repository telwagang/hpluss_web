"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var physician_model_1 = require("../../../models/physician.model");
var physicianlist = [
    new physician_model_1.PhysicianModel(1, 'john', 'general', new Date(2017, 2, 12), 20, ['SUN', 'MON', 'FRI']),
    new physician_model_1.PhysicianModel(2, 'john', 'general', new Date(2017, 2, 12), 13, ['SUN', 'MON', 'FRI']),
    new physician_model_1.PhysicianModel(3, 'john', 'general', new Date(2017, 2, 12), 20, ['SUN', 'MON', 'FRI']),
    new physician_model_1.PhysicianModel(4, 'john', 'general', new Date(2017, 2, 12), 13, ['SUN', 'MON', 'FRI']),
    new physician_model_1.PhysicianModel(5, 'john', 'general', new Date(2017, 2, 12), 20, ['SUN', 'MON', 'FRI'])
];
exports.PhysicianPromise = Promise.resolve(physicianlist);
//# sourceMappingURL=tempdata.service.js.map