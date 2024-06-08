import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { User } from '../demo/api/user.model';
import {Router} from '@angular/router';
import { PrimeNGConfig } from 'primeng/api'; 
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public translate: TranslateService, public layoutService: LayoutService, private router:Router, public primengConfig: PrimeNGConfig) { }

    ngOnInit(): void {
        this.getUserFromSession();
       
    }

    visible: boolean = false;

    position: 'right'|'top-right'|string|undefined;

    user: User = new User();

    username: string;

    isLoggedIn: boolean = false;



    showDialog(position: string) {
        this.position = position;
        this.visible = true;
    }

    getUserFromSession(){
        this.layoutService.getUserFromSession().subscribe((response)  => {
        this.user = response; });

        if(this.user){
        this.username = this.user.username;
        if(this.username){
            this.isLoggedIn = true;
        }
        }
    }

    logout(){
        this.redirectTo("/auth/login");
        this.layoutService.logout();
        this.isLoggedIn = false;
    }

    reLoad(){
        this.router.navigate([this.router.url])
      }

    redirectTo(uri: string) {
        this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
          this.router.navigate([uri])});
      }
      
      changeLang(lang: string) {
        this.translate.use(lang);
     }
   
}
