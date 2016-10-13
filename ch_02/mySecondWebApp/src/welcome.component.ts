import { Component, ViewChild, ElementRef } from '@angular/core';

import { WelcomeMsgService } from './welcome.service';
import { LANG_METADATA } from './lang-metadata';

@Component({
    selector: 'welcome-box',
    templateUrl: 'src/welcome.component.html',
    styles: [`
        .country-box {
            width: 15%;
            display: inline-block;
            margin: 10px 15px;
        }
        .country-box img {
            width: 120px;
        }
    `]
})
export class WelcomeComponent {
    userName: string;
    langType: string;
    langMetadata: any[] = LANG_METADATA;

    constructor(public welcomeMsgService: WelcomeMsgService) {
        this.langType = 'kr';
    }

    showAlert() {
        const msg = this.welcomeMsgService.getWelcomeMsgI18n(this.userName, this.langType);
        alert(msg);
    }

    setUserName($event) {
        this.userName = $event.target.value;
    }

    setLangType(type) {
        this.langType = type;
    }
}
