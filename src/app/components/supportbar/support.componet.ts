import { Component } from '@angular/core';
import { GlobalEventsManager } from '../../service/globelHandler.service';
@Component({
    selector: `SocialBar`,
    templateUrl: `./support.html`
})

export class SupportComponent {

    showSideBar: boolean ;
    constructor(private globel: GlobalEventsManager) {
        this.globel.showNavBarEmitter.subscribe((mode) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.showSideBar = mode;
            }
        });
    }
}
