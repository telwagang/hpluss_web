import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { SocketIO } from '../../service/socket-io.service';
import { GlobalEventsManager } from '../../service/globelHandler.service';
import { NavList } from '../../models/physician.model';

@Component(
    {
        selector: `appointment`,
        templateUrl: `./appointment.view.html`,
        styles: [`
            .bottom{
                clear:both;
            }
        `]
    }
)

export class AppointmentComponent implements OnInit {
    num: number;
    appointment: Array<{}>;
    constructor(private io: SocketIO, private _changeDetector: ChangeDetectorRef,
    private globel: GlobalEventsManager) {
        this.appointment = new Array<{}>();
    }

    ngOnInit() {
        this.mak();
        this.setNavLink();
        //this.subscribeClick();
        // this.getappoimnets();
    }
    /*
        getappoimnets() {
            this.io.on('appointment', (data: any) => {
                if (data) {
                    console.log(data);
                    this.appointment.push(data);
                    this.num = this.appointment.length;
                } else {
                    console.log(data);
                }
            });
        };*/

    mak(): void {
        this.globel.isLoad(true);

        this.io.registerSailsListener()
            .subscribe((message: any) => {
               // console.log(message);
                this.appointment = message;
                this.num = message.length;
                this._changeDetector.detectChanges();
                this.globel.isLoad(false);
            });
    }
    subscribeClick(): void {
        //submit a change to the observable through the service
        this.io.subscribeToSails();
    }

    unsubClick(): void {
        this.io.unsubscribeToSails();
    }
     private setNavLink() {
        let list = new Array<NavList>();

        list.push(new NavList('/home', 'Home'));
        list.push(new NavList('/add', 'View All'));
        list.push(new NavList('/delete', 'Current'));
        list.push(new NavList('/schudele', 'Refresh'));

        this.globel.addHeaders(list);
    }
}
