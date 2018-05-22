import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccountComponent } from '../../account/account.componet';
import { HomeComponent } from '../../home/component/home.component';
import { AppointmentComponent } from '../../appoinment/appoinment.component';
import { ScheduleComponent } from '../../schedule/schedule.component';
import { SettingComponent } from '../../settings/settings.component';
import { LoginComponent } from '../../login/componets/login.componet';
import { heroesRoutes} from '../../personal/personal.route';

import { PageNotFoundComponent } from '../componets/not-found-compontent';
import { AuthGuard } from '../../../guards/auth.guard';

import { NavbarComponent, SupportComponent, NavComponent } from "../componets/index";


const route: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'schudele',
        component: ScheduleComponent, canActivate: [AuthGuard]
    },
    {
        path: 'appointment',
        component: AppointmentComponent, canActivate: [AuthGuard]
    },
    {
        path: 'personal',
        children : [...heroesRoutes]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'account',
        component: AccountComponent, canActivate: [AuthGuard]
    },
    {
        path: 'settings',
        component: SettingComponent, canActivate: [AuthGuard]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: NavComponent, outlet: 'nav' },
    { path: '', component: NavbarComponent, outlet: 'navbar' },
    { path: '', component: SupportComponent, outlet: 'support' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(route),
        CommonModule
    ],
    declarations: [
        AppointmentComponent,
        AccountComponent,
        SettingComponent,
      PageNotFoundComponent
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouteModule { }
