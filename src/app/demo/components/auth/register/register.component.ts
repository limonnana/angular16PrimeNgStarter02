import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { IUser, User } from 'src/app/demo/api/user.model';
import { UserService } from 'src/app/demo/service/user.service';

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

  constructor(private userService: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  save(): void {
    console.log('*******************************enter');
    this.updateUser();
    console.log('*******************************user.password:' + this.user.password);
    this.userService.create(this.user).subscribe(data =>
      console.log('SUCCESS***************' + data));
  }

  private updateUser(): void {
    this.user = new User();
   // console.log('updateUser: ' + this.editForm.get(['email'])!.value + this.user.email);
    this.user.username = this.editForm.get(['email'])!.value;
    console.log('username:' + this.user.email);
    this.user.password = this.editForm.get(['password'])!.value;
    var confirmPassword = this.editForm.get(['confirmPassword'])!.value;
  }
}  
