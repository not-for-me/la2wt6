import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    appTitle: string;
    isShow: boolean;
    member: any = {name: 'woojin', email:'jwj0831@gmail.com'};
    // member: any = undefined;
    animals: string[] = ['Dog', 'Cat', 'Zebra', 'Pig'];
    animal: string;
    myObj: any;
    counter: number;

    edible: boolean = false;
    boilable: boolean = true;

    styleConf: any;

    constructor() {
        this.counter = 10;
        this.appTitle = "Angular2 is awesome!!!";
        this.isShow = true;
        this.animal = 'Dog';
        this.myObj = {
            'test-class': true,
            'your-class': 0,
            test: true
        };

        this.styleConf = {
            color: this.boilable ? 'green' : 'yellow',
            'font-weight': this.edible ? 'bold' : 'normal'
        };
    }

    toggleView() {
        this.isShow = ! this.isShow;
    }
}
