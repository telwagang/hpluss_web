import { Component } from '@angular/core';



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

    constructor() { }

    updatetime(value: any) {
        console.log(value);
     }

}
