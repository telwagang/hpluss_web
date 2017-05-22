import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalEventsManager {

    private _showNavBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
    public showNavBarEmitter: Observable<boolean> = this._showNavBar.asObservable();
    private _subMenu: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(null);
    public subMenu: Observable<string[]> = this._subMenu.asObservable();
    constructor() { }

    showNavBar(ifShow: boolean) {
        this._showNavBar.next(ifShow);
    }
    addHeaders(list: string[]) {
        this._subMenu.next(list);

    }


}
