import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { Subject } from 'rxjs/Subject';
import {DataService}  from './app.service'
@Injectable()
export class SocketIO {
    private url = 'http://127.0.0.1:1337';
    public socket = io(this.url);
    //private place = 'sliema';

    private _ioMessage$: Subject<{}>;
    constructor(private http: DataService) {
        this._ioMessage$ = <Subject<{}>>new Subject();
        //this.registerSailsListener();
    }

    get ioMessage$() {
        return this._ioMessage$.asObservable();
    }

    registerSailsListener(): Observable<any>{
       return this.http.get('/sockect/all');
        /*this.socket.on('appointment', (data: any) => {
            this._ioMessage$.next(data.data);
        });*/
    }
    subscribeToSails() {
        this.socket.send('/socket/join');
        this._ioMessage$.next({
            message: "Joined Chat Room"
        });
    }

    unsubscribeToSails() {
        self["io"].socket.get('/socket/leave');
        this._ioMessage$.next({
            message: "Left Chat Room"
        });
    }

    sendMessage(path: string, message: any) {
        this.socket.emit(path, message);

    }
/*
    get(path: string) {
        let observable = new Observable((observer: any) => {
            this.socket.on('appointment', (data: any) => {
                observer.next(data.json().data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
    connect() {
        this.ds.getraw('/sockect/index', '').
            subscribe((data: any) => {
                if (data) {
                    console.log(data);
                    this.socket.connect('?cookie=' + data._body);
                }
            });
    }*/
}
