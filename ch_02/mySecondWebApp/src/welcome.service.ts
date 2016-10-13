import { LANG_METADATA } from './lang-metadata';

export class WelcomeMsgService {
    getWelcomeMsgI18n(userName, langType: string) {
        let helloMsg = '';
        LANG_METADATA.forEach((lang) => {
            if (lang.code === langType) {
                helloMsg = lang.msg;
            }
        });
        return `${helloMsg}, ${userName}!`;
    }
}