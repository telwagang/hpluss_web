import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../componets/app.component';
import { AppRouteModule } from '../route/app.route';
import { PersonalModule } from '../../personal/personal.module';
import { HomeModule } from '../../home/home.module';
import { NotFoundModule } from './not-found.module';
import { ScheduleModule } from '../../schedule/module/schedule.module';
import { LoginModule } from '../../login/login.module';
import { HttpModule } from '@angular/http';
import { ThemeModule } from '../../topbar/theme.module';
import { DataService} from '../../../service/app.service';
import { SocketIO } from '../../../service/socket-io.service';
import { GlobalEventsManager } from '../../../service/globelHandler.service';
import { requestOptionsProvider } from '../../../service/base.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    LoginModule,
    PersonalModule,
    HomeModule,
    NotFoundModule,
    ScheduleModule,
    AppRouteModule
  ],
  declarations: [
    AppComponent
  ],
    providers: [ GlobalEventsManager ,DataService, SocketIO,
    , requestOptionsProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
