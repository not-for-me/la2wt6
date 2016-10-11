import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="contents">
        <label for="user-name">사용자 이름: </label>
        <input #myInputElem type="text" name="user-name">
        <button type="button" (click)="showAlert()">입력</button>
    </div>
    `,
})
export class AppComponent { 
    @ViewChild("myInputElem")
    private myElem: ElementRef;
    
    showAlert() {
        const myName = this.myElem.nativeElement.value;
        alert(`안녕하세요, ${myName}님!`);
    }
}

