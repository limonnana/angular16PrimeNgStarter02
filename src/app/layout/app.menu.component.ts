import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { User } from '../demo/api/user.model';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    model0: any[] = [];

    model1: any[] = [];

    model2: any[] = [];

    user: User = new User();

    username: string;

    isLoggedIn: boolean = false;


    constructor(public layoutService: LayoutService) { }

   
    ngOnInit() {
      this.showMenu();
    }

    showMenu(){

        this.model1 = [

            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    
                ]
            }
        ];

        this.model2 = [

            {
                label: 'Admin',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Users',
                                icon:  'pi pi-fw pi-user',
                                routerLink: ['/uikit/user']
                            }
                        ]
                    }
                ]
            }

            

        ];

      //  this.model0 = this.model1.concat(this.model2);



        
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    
                ]
            },
            
            {
                label: 'Admin',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Admin',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Users',
                                icon:  'pi pi-fw pi-user',
                                routerLink: ['/uikit/user']
                            },

                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                         
                            {
                                label: 'Register',
                                icon:  'pi pi-fw pi-user-plus',
                                routerLink: ['/auth/register']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                ]
                            },
                        ]
                    }
                ]
            }
        ];

        
        this.getUserFromSession();  

            if(this.isLoggedIn){
                this.model0 = this.model1.concat(this.model2);
            }
            else{
                this.model0 = this.model1;
            }
        

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

}
