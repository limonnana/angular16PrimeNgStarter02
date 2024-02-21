import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser, User } from 'src/app/demo/api/user.model';
import { UserService } from 'src/app/demo/service/user.service';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user!: User;

  editForm = this.fb.group({
    id: [],
    email: ['', [Validators.minLength(10), Validators.maxLength(254)]],
    password: ['',[Validators.required, Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.maxLength(50)]],  
  });

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, public layoutService: LayoutService) {}

  ngOnInit(): void {}

  save(): void {
  
    this.updateUser();
   
    this.userService.create(this.user).subscribe(
      data => console.log('SUCCESS***************' + data.id + ' ' + data.username));
     
        setTimeout(() => {
          this.router.navigate(['/uikit/user']);
      }, 3000);  //3s
      
  }

  private updateUser(): void {
    this.user = new User();
    this.user.username = this.editForm.get(['email'])!.value;
    console.log('username:' + this.user.username);
    this.user.password = this.editForm.get(['password'])!.value;
    var confirmPassword = this.editForm.get(['confirmPassword'])!.value;
  }
}  
