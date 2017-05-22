import { Injectable } from '@angular/core';
import { PhysicianPromise } from './tempdata.service';

@Injectable()
export class ViewService {
    constructor() {}

  getPhysicians() { return PhysicianPromise; }

  getPhysician(id: number | string) {
    return PhysicianPromise
      .then(physicians => physicians.find(physician => physician.id === +id));
  }
}
