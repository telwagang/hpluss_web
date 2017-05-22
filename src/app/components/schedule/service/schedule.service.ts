import { Inject, Injectable } from '@angular/core';
import { ScheduleModel } from '../../../models/physician.model';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../../service/app.service';
import { SocketIO } from '../../../service/socket-io.service';

@Injectable()
export class ScheduleService {

    public schedule: Array<ScheduleModel>;
    private pathschedule: string = '/sockect/appointment';
    public error: any;
    constructor(private socket: SocketIO, private ds: DataService) {
    }

    getSchedule(): Observable<any> {
       return this.socket.get(this.pathschedule);
    }
    getScheduleold() {
        return this.ds.get(this.pathschedule,'').map(
            x => <any> x
        );
    }


}
