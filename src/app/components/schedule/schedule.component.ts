import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ScheduleService } from './service/schedule.service';
import { ScheduleModel } from '../../models/physician.model';
import { SocketIO } from '../../service/socket-io.service';
import { GlobalEventsManager } from '../../service/globelHandler.service';
import { NavList } from '../../models/physician.model';


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
    days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // schedule: Observable< ScheduleModel[]>;
    schedule: string[] = [];
    constructor(private ds: ScheduleService,
        private global: GlobalEventsManager) {
        this.setNavLink();
    }

    selectperiod(value: string): void {
        this.getday(value);
    }
    ngOnInit() {
        this.getday();
    };

    private setNavLink() {
        let list = new Array<NavList>(
                new NavList('/home', 'Home'),
                new NavList('/add', 'Add'),
                new NavList('/delete', 'Delete'),
                new NavList('/schudele', 'Refresh'));

        this.global.addHeaders(list);
    }
    getday(day?: string) {
        this.global.isLoad(true);
        if (!day) {
            day = this.getDayName(new Date());
        }

        console.log(day);
        this.ds.getSchedule(day).subscribe(
            (data) => {
                if (data) {
                    this.schedule = data;
                    this.global.isLoad(false);
                }
            }, (error) => {
                console.log(error);
                this.global.isLoad(false);
            }
        );
    }
    getDayName(time: Date): string {
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        return weekday[time.getDay()];
    }
}
