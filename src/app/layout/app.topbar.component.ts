import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { User } from '../demo/api/user.model';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }

    ngOnInit(): void {
        this.getUserFromSession();
    }

    visible: boolean = false;

    position: 'right'|'top-right'|string|undefined;

    user: User = new User();

    username: string;



    showDialog(position: string) {
        this.position = position;
        this.visible = true;
    }

    getUserFromSession(){
        this.layoutService.getUserFromSession().subscribe((response)  => {
        this.user = response; });

        if(this.user){
        this.username = this.user.username;
        }
    }

   
}
