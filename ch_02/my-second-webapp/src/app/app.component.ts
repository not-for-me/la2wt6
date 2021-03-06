import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <h1>{{appTitle}}</h1>
    <welcome-box></welcome-box>
    `,
})
export class AppComponent implements OnInit {
    appTitle: string;
    constructor() {
        this.appTitle = "다국어 인사말 서비스";
    }

    ngOnInit() {
        console.log("안녕하세요! 이름을 입력해 주세요");
    }
}
