import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonalComponent } from './component/personal.component';
import { PhysicianComponent } from './component/physician.component';
import { ViewAllComponent } from './component/view-all.component';
import { ScheduleComponent } from './component/schedule.component';
import { AdjustmentComponent } from './component/adjustment.component';
import { PersonalRoutingModule } from './personal.route';

import { ViewService } from './service/view-all.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PersonalRoutingModule
    ],
    declarations: [
        PersonalComponent,
        AdjustmentComponent,
        ScheduleComponent,
        PhysicianComponent,
        ViewAllComponent
    ],
    providers: [ViewService]
})

export class PersonalModule {}
