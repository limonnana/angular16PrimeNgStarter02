import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { User } from 'src/app/demo/api/user.model';
import { UserService } from 'src/app/demo/service/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

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

    user!: User;

    password!: string;

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
       
        this.userService.login(this.user).subscribe(
          data => {
            if(data && data.id != undefined){
                console.log('SUCCESS***************' + data.id + ' ' + data.username);
                this.router.navigate(['/']); 
            }else{
                console.log('WRONG Username or password***************');
                this.router.navigate(['/auth/login']); 
            }
        })
    }
          
        
       
    
      private updateUser(): void {
        this.user = new User();
       // console.log('updateUser: ' + this.editForm.get(['email'])!.value + this.user.email);
        this.user.username = this.loginForm.get(['email'])!.value;
        console.log('username:' + this.user.username);
        this.user.password = this.loginForm.get(['password'])!.value;
      }
}
