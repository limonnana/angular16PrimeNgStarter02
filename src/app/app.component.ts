import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

   
    constructor(private primengConfig: PrimeNGConfig, private layoutService: LayoutService, private translateService: TranslateService) 
    {
        this.translateService.addLangs(['en', 'es']);

        const browserLang = translateService.getBrowserLang();
        console.info('browser: ' + browserLang);
        let lang = browserLang.match(/en|es/) ? browserLang : 'en';
        console.info('lang:' + lang);
        this.changeLang(lang);
    }

    ngOnInit() {
        this.primengConfig.ripple = true;

        //optional configuration with the default configuration
        this.layoutService.config = {
            ripple: false,                      //toggles ripple on and off
            inputStyle: 'outlined',             //default style for input elements
            menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
            colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
            theme: 'tailwind-light',         //default component theme for PrimeNG
            scale: 14                          //size of the body font size to scale the whole application
        };

    
        this.translateService.setDefaultLang('en');
        this.translateService.use('en');
    }
    
    changeLang(lang: string) {
        this.translateService.use(lang);
     }


    
}
