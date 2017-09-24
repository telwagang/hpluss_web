import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NavList } from '../models/physician.model';
@Injectable()
export class GlobalEventsManager {

    private _showNavBar: BehaviorSubject<boolean>;
    public showNavBarEmitter: Observable<boolean>;
    private _subMenu: BehaviorSubject<Array<NavList>>;
    public subMenuEmitter: Observable<Array<NavList>> ;
    private _loading: BehaviorSubject<boolean>;
    public loadingEmitter: Observable<boolean>;


    constructor() {
        this.init_loading();
        this.init_Navbar();
        this.init_SubMenu();
    }

    public showNavBar(ifShow: boolean) {
        this._showNavBar.next(ifShow);
    }
    public addHeaders(list: Array<NavList>) {
        this._subMenu.next(list);
    }

    public getUser(): any {
        return localStorage.getItem('user_name');
    }

    public isLoad(show: boolean) {
        this._loading.next(show);
    }

    // setting up the loading gif 
    private init_loading() {
        // set up an observer subject 
        this._loading = new BehaviorSubject<boolean>(false);

        // add a listener to the subject 
        this.loadingEmitter = this._loading.asObservable();
    }

    // setting up auth state 
    private init_Navbar() {
        // set up an observer subject 
        this._showNavBar = new BehaviorSubject<boolean>(null);

        // add a listener to the subject 
        this.showNavBarEmitter = this._showNavBar.asObservable();
    }

    // setting up the sub Menu Bar 
    private init_SubMenu() {
         // set up an observer subject 
        this._subMenu = new BehaviorSubject<Array<NavList>>(null);
        // add a listener to the subject
        this.subMenuEmitter = this._subMenu.asObservable();
    }
    

}
