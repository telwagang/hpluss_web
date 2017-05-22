import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalComponent } from './component/personal.component';
import { PhysicianComponent } from './component/physician.component';
import { ViewComponent } from './component/view-all.component';
import { ScheduleComponent } from './component/schedule.component';
import { AdjustmentComponent } from './component/adjustment.component';
import { PageNotFoundComponent } from '../../components/aaa/componets/not-found-compontent';

const heroesRoutes: Routes = [
  {
    path: 'personal',
    component: PersonalComponent,
    children: [
      {
        path: '',
        component: ViewComponent
      },
      {
        path: 'physician',
        component: PhysicianComponent
      },
      {
        path: 'physician:id',
        component: PhysicianComponent
      },
      {
        path: 'schedule',
        component: ScheduleComponent
      },
      {
        path: 'adjustment',
        component: AdjustmentComponent
      },
      { path: '**', component: PageNotFoundComponent }]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonalRoutingModule { }
