import { Inject, Injectable } from '@angular/core';
import { ScheduleModel } from '../../../models/physician.model';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../../../service/app.service';
import { SocketIO } from '../../../service/socket-io.service';

@Injectable()
export class ScheduleService {

    public schedule: Array<ScheduleModel>;
    private pathschedule: string = '/schedule/byday';
    public error: any;
    private place: string; 
    constructor(private socket: SocketIO, private ds: DataService) {
    }

    getSchedule(day:string): Observable<any> {
    this.place = 'place=Sliema';
       return this.ds.getOption(this.pathschedule,'day='+day+'&'+this.place);
    }
    getScheduleold() {
        return this.ds.get(this.pathschedule).map(
            x => <any> x
        );
    } 


}
