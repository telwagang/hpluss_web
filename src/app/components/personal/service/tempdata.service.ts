import { PhysicianModel } from '../../../models/physician.model';


let physicianlist = [
        new PhysicianModel(1, 'john', 'general', new Date(2017, 2, 12), 20, ['SUN', 'MON', 'FRI']),
        new PhysicianModel(2, 'john', 'general', new Date(2017, 2, 12), 13, ['SUN', 'MON', 'FRI']),
        new PhysicianModel(3, 'john', 'general', new Date(2017, 2, 12), 20, ['SUN', 'MON', 'FRI']),
        new PhysicianModel(4, 'john', 'general', new Date(2017, 2, 12), 13, ['SUN', 'MON', 'FRI']),
        new PhysicianModel(5, 'john', 'general', new Date(2017, 2, 12), 20, ['SUN', 'MON', 'FRI'])
    ];

   export let PhysicianPromise = Promise.resolve(physicianlist);
