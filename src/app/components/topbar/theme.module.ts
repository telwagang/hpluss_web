import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../topbar/nav.component';
import { SupportComponent } from '../supportbar/support.componet';
import { NavbarComponent } from '../sidebar/navbar.componet';
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        NavComponent,
        SupportComponent,
        NavbarComponent
    ]
})

export class ThemeModule {}
