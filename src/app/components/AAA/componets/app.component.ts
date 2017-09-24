import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
import { GlobalEventsManager } from '../../../service/globelHandler.service';
@Component({
  selector: 'my-app',
  template: '<router-outlet name="nav"></router-outlet> <router-outlet name="navbar" ></router-outlet><router-outlet name="support"></router-outlet><router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(private router: Router,
    private globel: GlobalEventsManager) {
    this.routerChange();

  }


  private routerChange() {
    this.router.events
      .subscribe((event: NavigationStart | NavigationEnd) => {
        if (event instanceof NavigationStart) {
          console.log('start');
          this.globel.isLoad(true);
        }
        else if (event instanceof NavigationEnd) {
          console.log(' end');
          this.globel.isLoad(false);
        }
      });
  }
}
