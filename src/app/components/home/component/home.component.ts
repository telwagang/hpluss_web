import { Component } from '@angular/core';
import { GlobalEventsManager } from '../../../service/globelHandler.service';
import { NavList } from '../../../models/physician.model';

@Component(
    {
        selector: `home`,
        templateUrl: `app/components/home/view/home.view.html`,
        styles: [`.row{
            margin-left:0px;
        }`]
    }
)

export class HomeComponent {

    times = ['This Week', 'Last Month', 'Last Month', '3 Month', '6 Month', 'Year'];

    constructor(private globel: GlobalEventsManager) {
        this.setNavLink();
    }

    updatetime(value: any) {
        console.log(value);
    }
    private setNavLink() {
        let list = new Array<NavList>();

        list.push(new NavList('/', 'Home'));

        this.globel.addHeaders(list);
    }
}
