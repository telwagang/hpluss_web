import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalEventsManager } from '../../service/globelHandler.service';
import { AuthenticationService } from '../login/service/authentication.service';
import { Observable } from 'rxjs/Observable';
import { NavList } from '../../models/physician.model';

@Component({
    selector: `ActiveBar`,
    templateUrl: `./nav.html`
})


export class NavComponent {
    showNavBar: boolean;
    user: string;
    shouldspin: boolean;
    navlist: Array<NavList>;
    constructor(
        private router: Router,
        private globel: GlobalEventsManager,
        private auth: AuthenticationService) {
        this.showbar();
        this.spin();
        this.SubMenuList();
    }
    private spin() {
        this.globel.loadingEmitter.subscribe(
            (mode) => {
                this.shouldspin = mode;
            });
    }

    private showbar() {
        this.globel.showNavBarEmitter.subscribe((mode) => {
            // mode will be null the first time it is created, so you need to igonore it when null
            if (mode !== null) {
                this.showNavBar = mode;
                var data = this.globel.getUser();
                this.user = data;

            }
        });
    }

    private SubMenuList() {
        this.globel.subMenuEmitter.subscribe((list)=>{
            this.navlist = list;
            console.log(list.length);
        });
    }

    logout(): void {
        this.auth.logout();
        this.globel.showNavBar(false);
        this.router.navigate(['/login']);
    }


}
