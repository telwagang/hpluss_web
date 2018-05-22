import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalComponent } from './component/personal.component';
import { PhysicianComponent } from './component/physician.component';
import { ViewAllComponent } from './component/view-all.component';
import { ScheduleComponent } from './component/schedule.component';
import { AdjustmentComponent } from './component/adjustment.component';
import { PageNotFoundComponent } from '../../components/aaa/componets/not-found-compontent';
import { NavbarComponent, NavComponent, SupportComponent } from "../../components/AAA/componets/index";
import { AuthGuard } from "../../guards/auth.guard";
export const heroesRoutes: Routes = [
  {
    path: '',
    component: PersonalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ViewAllComponent
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
      { path: '', component: NavComponent, outlet: 'nav' },
      { path: '', component: NavbarComponent, outlet: 'navbar' },
      { path: '', component: SupportComponent, outlet: 'support' },
      { path: '**', component: PageNotFoundComponent }]
  }
];


@NgModule({
  exports: [
    RouterModule
  ]
})
export class PersonalRoutingModule { }
