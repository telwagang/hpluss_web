import { Component, OnInit } from '@angular/core';
import { GlobalEventsManager } from '../../service/globelHandler.service';
import { NavList } from '../../models/physician.model';


@Component(
    {
        selector: `settings`,
        templateUrl: `./settings.html`
    }
)

export class SettingComponent implements OnInit {
    

    constructor(private global: GlobalEventsManager){
        this.setNavLink();
    }

    ngOnInit(): void {
    }

    private setNavLink() {
        let list = new Array<NavList>(
        new NavList('/home', 'home'),
        new NavList('/administrative', 'Administrative'),
        new NavList('/resources', 'Resources'),
        new NavList('/system', 'System'),
        new NavList('/settings', 'Refresh'));

        this.global.addHeaders(list);
    }

}
