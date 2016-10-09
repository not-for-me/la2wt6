import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="contents">
        <label for="user-name">사용자 이름: </label>
        <input #myInputElem type="text" name="user-name" id="user-name">
        <button type="button" (click)="printLog()">입력</button>
    </div>
    `,
})
export class AppComponent { 
    @ViewChild("myInputElem")
    private myElem: ElementRef;
    
    printLog() {
        const myName = (<HTMLInputElement>this.myElem.nativeElement).value;
        console.log("안녕하세요: " + myName);
    }
}

