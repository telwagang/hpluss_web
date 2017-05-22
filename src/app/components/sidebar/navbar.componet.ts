import { Component } from '@angular/core';
import { GlobalEventsManager } from '../../service/globelHandler.service';
import { } from '@angular/roi';
@Component({
    templateUrl: `./navbar.html`
})


export class NavbarComponent {

    actived: string = 'active';
    showBar: boolean;
    constructor(private globel: GlobalEventsManager) {
        this.globel.showNavBarEmitter.subscribe((mode) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.showBar = mode;
            }
        });
    }

    navlink(value: any) {

    }
}
