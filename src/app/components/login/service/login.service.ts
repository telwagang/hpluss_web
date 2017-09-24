                                                import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { EmployeeModel } from '../../../models/physician.model';
import { DataService } from '../../../service/app.service';
@Injectable()
export class UserService {
    constructor(private http: DataService) { }

    getAll() {
        return this.http.get('/api/users').map((response: JSON) => response);
    }

    getById(id: string) {
        return this.http.getOption('/api/users/',id).map((response: JSON) => response );
    }

    create(user: EmployeeModel) {
        return this.http.post('/api/users', user).map((response: JSON) => response);
    }

    update(user: EmployeeModel) {
        return this.http.update('/api/users/' + user.employeeId, user).map((response: JSON) => response);
    }

    delete(id: string) {
        return this.http.delete('/api/users/' + id).map((response: JSON) => response);
    }

    // private helper methods
}
