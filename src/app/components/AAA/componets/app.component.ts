import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
 template: '<router-outlet name="nav"></router-outlet> <router-outlet name="navbar" ></router-outlet><router-outlet name="support"></router-outlet><router-outlet></router-outlet>'
})
export class AppComponent  { }
