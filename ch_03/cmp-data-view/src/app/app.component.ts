import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <p>{{contentData}}</p>
        <p [textContent]="contentData"></p>
        <button color="primary" (click)="changeText()">{{getSomeButtonText('abc')}}</button>
    `
})
export class AppComponent {
    contentData: string;
    backupData: string = "데이터 변경의 반영도 Angular가";

    constructor() {
        this.contentData = "데이터 노출은 Angular에게 위임을";
    }

    // 권장하지 않는 방식, 파이프를 사용하는 것이 더 좋음
    getSomeButtonText(code: string) {
        return `입력: ${code}`;
    }

    changeText() {
        const tempData = this.contentData;
        this.contentData = this.backupData;
        this.backupData = tempData;
    }
}
