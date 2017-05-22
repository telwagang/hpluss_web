import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GlobalEventsManager, AlertService, AuthenticationService } from '../service/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.view.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private global: GlobalEventsManager,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
            data => {
                if (data) {
                    if (data.message) {
                        this.alertService.error(data.message);
                        this.loading = false;
                    }else{
                    console.log(data);
                    this.global.showNavBar(true);
                    this.router.navigate([this.returnUrl]);
                    }
                }

            });
    }
}
