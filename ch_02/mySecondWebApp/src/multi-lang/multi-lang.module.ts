import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { WelcomeMsgService } from './welcome.service';

@NgModule({
    imports: [CommonModule],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent],
    providers: [WelcomeMsgService],
})
export class MultiLangSupportModule { }

