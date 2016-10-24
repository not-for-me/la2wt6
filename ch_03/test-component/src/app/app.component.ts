import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class MainComponent {
    appTitle: string;

    constructor() {
        this.appTitle = "Angular2 is awesome!!!";
    }

    myFunc() {
        console.log("test");
    }
}
