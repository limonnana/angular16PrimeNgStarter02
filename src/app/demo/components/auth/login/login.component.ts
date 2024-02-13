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

         /*
    this.userService.login(data).subscribe(response => {
     if (response && response.token) {
        localStorage.setItem('token', response.token.accessToken);
        let date = new Date();
        let hours = Math.round(response.token.expiresIn / 3600);
        date.setHours(date.getHours() + hours);

        localStorage.setItem('expires', JSON.stringify(date));

        // Redirect the user to /home
        this.router.navigate(['/dashboard'])
      }
    });*/
       
        this.userService.login(this.login).subscribe(
          data => {
            if(data && data.token){
                console.log('SUCCESS***************' + data.id + ' ' + data.username);
                this.user.id = data.id;
                this.user.token = data.token;
                this.user.username = data.username;
                 sessionStorage.setItem('sekurity-user',JSON.stringify(this.user));
                 this.router.navigate(['/']); 
            }else{
                console.log('WRONG Username or password***************');
                this.router.navigate(['/auth/login']); 
            }
        })
    }
          
        
       
    
      private updateUser(): void {
        this.login = new Login();
        this.login.username = this.loginForm.get(['email'])!.value;
        console.log('username:' + this.login.username);
        this.login.password = this.loginForm.get(['password'])!.value;
      }
}
