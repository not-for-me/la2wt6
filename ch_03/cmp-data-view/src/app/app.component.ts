import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    contentData: string;
    @ViewChild('chkBox')
    chkBoxElemRef: ElementRef;

    constructor() {
        this.contentData = "데이터 노출은 Angular에게 위임을";
    }

    // 권장하지 않는 방식, 파이프를 사용하는 것이 더 좋음
    getSomeButtonText(code: string) {
        return `입력: ${code}`;
    }

    confirm() {
        alert(`체크여부: ${this.chkBoxElemRef.nativeElement.checked}`);
    }
}
