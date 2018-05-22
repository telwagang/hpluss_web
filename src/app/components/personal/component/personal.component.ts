import { Component } from '@angular/core';
import { GlobalEventsManager } from '../../../service/globelHandler.service';
import { NavList } from '../../../models/physician.model';

@Component(
    {
        selector: `personal`,
        templateUrl: `app/components/personal/view/personal.view.html`
    }
)

export class PersonalComponent {


 constructor(public global: GlobalEventsManager){
     this.setNavLink();
 }


 private setNavLink() {
    let list = new Array<NavList>(
    new NavList('/home', 'Home'),
    new NavList('/personal', 'View All'),
    new NavList('/personal/physician', 'Physician'),
    new NavList('/personal/schedule', 'schedule'),
    new NavList('/personal/adjustment', 'adjustment'));

    this.global.addHeaders(list);
}

}
