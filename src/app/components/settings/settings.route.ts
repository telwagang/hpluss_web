import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PageNotFoundComponent } from '../../components/aaa/componets/not-found-compontent';
import { SettingComponent } from './settings.component';

import {SpecialtyComponent, AdministrativeComponent, ResourcesComponent, SystemComponent} from './settingsComponents/index';

export const settingsRoutes: Routes = [
    {
      path: '',
      component: SettingComponent,
      children: [
        {
          path: 'administrative',
          component: AdministrativeComponent
        },
        {
          path: 'resources',
          component: ResourcesComponent
        },
        {
            path: 'resources/specialty',
            component: SpecialtyComponent
          },
        {
          path: 'system',
          component: SystemComponent
        },
        { path: '**', component: PageNotFoundComponent }]
    }
  ];