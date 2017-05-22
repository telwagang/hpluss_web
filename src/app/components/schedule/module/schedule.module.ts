import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleComponent } from '../schedule.component';

import { ScheduleService } from '../service/schedule.service';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ScheduleComponent
    ],
    providers: [ScheduleService]
})

export class ScheduleModule { }
