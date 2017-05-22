import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { SocketIO } from '../../service/socket-io.service';
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
    constructor(private io: SocketIO, private _changeDetector: ChangeDetectorRef) {
        this.appointment = new Array<{}>();
    }

    ngOnInit() {
        this.mak();
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
        this.io.registerSailsListener()
            .subscribe((message: any) => {
                console.log(message);
                this.appointment = message;
                this.num = message.length;
                this._changeDetector.detectChanges();
            });
    }
    subscribeClick(): void {
        //submit a change to the observable through the service
        this.io.subscribeToSails();
    }

    unsubClick(): void {
        this.io.unsubscribeToSails();
    }

}
