import { Component } from '@angular/core';

import { DurationModel } from '../../../models/physician.model';

@Component({
    selector: `adjustment`,
    templateUrl: `app/components/personal/view/adjustment.view.html`,
    styles: [`
        .box{
            width:30px;
            padding:0px !important;
            background: #f2f2f2;
    border: 1px solid #dadada;
    text-align: center;
}
        .full{
            width:100%;
        }
            
        }
        thead,tbody{
            display:block;
        }
        
    `]

})

export class AdjustmentComponent {

    duration = [
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 2, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date),
        new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date), new DurationModel('we23123', 'Dr. wolf gang', 23, 0, new Date)];
    days = ['Monday', 'Tuesday', 'Wenseday', 'thursday', 'friday', 'saturday'];
    constructor() {
    }

    changeValue(event: any, D: DurationModel) {
        console.log(D);
    }

}
