import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'todo-lang-switch',
    templateUrl: './lang-switch.component.html'
})
export class LangSwitchComponent {
    public myLang = 'de';
    public languages = [{ code: 'de', name: 'Deutsch' }, { code: 'en', name: 'English' }];

    constructor(private translate: TranslateService) {
        translate.setDefaultLang(this.myLang);
    }

    public onLangChanged(event) {
        console.log('lang changed ' + event.value);
        this.translate.use(event.value);
    }
}
