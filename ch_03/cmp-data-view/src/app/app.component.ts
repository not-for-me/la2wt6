import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    contentData: string;

    constructor() {
        this.contentData = "데이터 노출은 Angular에게 위임을";
    }

    // 권장하지 않는 방식, 파이프를 사용하는 것이 더 좋음
    getSomeButtonText(code: string) {
        return `입력: ${code}`;
    }
}
