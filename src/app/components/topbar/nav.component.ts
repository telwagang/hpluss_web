import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalEventsManager } from '../../service/globelHandler.service';
import { AuthenticationService } from '../login/service/authentication.service';


@Component({
    selector: `topbar`,
    templateUrl: `./nav.html`
})


export class NavComponent {
    showNavBar: boolean ;
    constructor(
        private router : Router,
        private globel: GlobalEventsManager,
        private auth: AuthenticationService) {
        this.globel.showNavBarEmitter.subscribe((mode) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.showNavBar = mode;
            }
        });
    }

    logout(): void {
            this.auth.logout();
            this.globel.showNavBar(false);
            this.router.navigate(['/login']);
    }


}
