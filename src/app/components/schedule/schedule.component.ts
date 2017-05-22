import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ScheduleService } from './service/schedule.service';
import { ScheduleModel } from '../../models/physician.model';
import { SocketIO } from '../../service/socket-io.service';
@Component(
    {
        selector: `schedule`,
        templateUrl: `./schedule.view.html`,
        styles: [` 

        
        `],
        providers: [ScheduleService]
    }
)

export class ScheduleComponent implements OnInit {

    days = ['Monday', 'Tuesday', 'Wenseday', 'thursday', 'friday', 'saturday'];

    // schedule: Observable< ScheduleModel[]>;
    schedule : string[] = [];
    constructor(private ds: ScheduleService) { 
    }

    selectperiod(value: string): void {

    }
    ngOnInit(): void {
        this.ds.getSchedule().subscribe(
            (data) => {
                if (data) {
                    console.log(data);
                }
            }
        )
    }
}
