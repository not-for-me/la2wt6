export class WelcomeMsgService {
    welcomeMsg: any;

    constructor() {
        this.welcomeMsg = {
            'ko': '안녕하세요',
            'en': 'Hello',
            'jp': '初めまして',
            'fr': 'Bonjour'
        };
    }

    getWelcomeMsgI18n(userName, langType: string) {
        const helloMsg = this.welcomeMsg[langType];
        return `${helloMsg}, ${userName}!`;
    }
}