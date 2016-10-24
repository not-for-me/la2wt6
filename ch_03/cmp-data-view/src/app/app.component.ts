import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <p>{{contentData}}</p>
        <p>{{getSomeText(‘Angular2’)}}</p>
        <p>{{ ‘<‘ + contentData + ‘>’ }}</p>
        <p [textContent]="contentData"></p>
    `
})
export class AppComponent {
    contentData: string;

    constructor() {
        this.contentData = "데이터 노출은 Angular에게 위임을";
    }

    // 권장하지 않는 방식, 파이프를 사용하는 것이 더 좋음
    getSomeText(appName: string) {
       return `${appName}를 공부하는 방법!`;
    }
}
