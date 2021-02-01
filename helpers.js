import { Controllers } from './index.js';

export class HelpersDeclaration {
    constructor() {
        this.regExpPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        this.regExpName = /^[а-яА-Я]+$/;
    }

    get getIsNameValid() {
        return this.regExpName.test(Controllers.getName);
    }

    get getIsPhoneValid() {
        return this.regExpPhone.test(Controllers.getPhone);
    }

    onCustomNameFieldCheckValid(name) {
        return this.regExpName.test(name);
    }

    onCustomPhoneFieldCheckValid(phone) {
        return this.regExpPhone.test(phone);
    }

    get getUniqId() {
        return Math.floor(Math.random() * 9999)
    }
}