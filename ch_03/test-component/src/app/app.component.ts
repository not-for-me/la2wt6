import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    appTitle: string;
    constructor() {
        this.appTitle = "Angular2 is awesome!!!";
    }
}
