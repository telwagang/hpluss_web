import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthGuard } from '../../guards/auth.guard';
import { AlertService, AuthenticationService, UserService } from './service/index';
import { LoginComponent } from './componets/login.componet';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

    ]
})
export class LoginModule { }