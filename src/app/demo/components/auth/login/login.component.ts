import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { User } from 'src/app/demo/api/user.model';
import { UserService } from 'src/app/demo/service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from 'src/app/demo/api/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    visible: boolean = false;

    valCheck: string[] = ['remember'];

    login!: Login;

    password!: string;

    user: User = new User();

    constructor(public layoutService: LayoutService, private fb: FormBuilder, private userService: UserService, private router: Router) { }

    loginForm = this.fb.group({
        email: ['', [Validators.minLength(10), Validators.maxLength(254)]],
        password: ['',[Validators.required, Validators.maxLength(50)]],
    });

      save(): void {
  
        this.updateUser();

        this.userService.login(this.login).subscribe(

            {
            next: (data: User) => { 
                this.user = data;
                console.log('SUCCESS***************' + this.user.admin + ' ' + this.user.username);
                
                sessionStorage.setItem('sekurity-user',JSON.stringify(this.user));
                this.router.navigate(['/']); 
              },
              error: () => { 
                console.log(Error);
                console.log('WRONG Username or password***************');
                this.visible = true;
              }, 

            }




         );
    }
          
        
       
    
      private updateUser(): void {
        this.login = new Login();
        this.login.username = this.loginForm.get(['email'])!.value;
        console.log('username:' + this.login.username);
        this.login.password = this.loginForm.get(['password'])!.value;
      }
}
