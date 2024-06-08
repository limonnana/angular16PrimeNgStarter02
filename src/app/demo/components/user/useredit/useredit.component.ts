import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { IUser, User } from 'src/app/demo/api/user.model';
import { UserService } from 'src/app/demo/service/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.scss'
})
export class UsereditComponent {

  username? : string;
  user? : User = new User();


    constructor(private route: ActivatedRoute, private userService: UserService,  private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.userService.getUserByUsername(this.username).subscribe({
      next: (data: User) => {
        console.log('SUCCESS***************' + data.admin + ' ' + data.username);
        this.user.id = data.id;
        this.user.token = data.token;
        this.user.username = data.username;
        this.user.admin = data.admin;
        this.user.name = data.name;
        this.user.lastName = data.lastName;
        this.user.email = data.email;
        this.user.phone = data.phone;
         console.log('SUCCESS***************' + this.user.admin + ' ' + this.user.username);
         this.updateForm(this.user);
        },
      error: () => { 
        console.log(Error); 
        this.router.navigate(['/auth/login']); 
      }, 
   });

  }

  userForm = this.fb.group({
    name: ['', [Validators.minLength(4), Validators.maxLength(35)]],
    lastName: ['', [Validators.minLength(4), Validators.maxLength(35)]],
    phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', [Validators.minLength(10), Validators.maxLength(254)]],
});

  save(): void {
    const updatedUser = this.createFromForm1();
    this.userService.update(updatedUser).subscribe({
      next: (data: User) => { 
        this.user = data;
        this.router.navigate(['/uikit/user']);     
      },
      error: () => { 
        console.log(Error); 
      }, 
   });
  }

  updateForm(user: IUser): void {
    this.userForm.patchValue({
      name: user?.name,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone
    });
  }

  private createFromForm(): IUser{

    const u : User = new User();

    u.id = this.user.id;
    u.username = this.user.username;
    u.name = this.userForm.get(['name'])!.value;
    u.lastName = this.userForm.get(['lastName'])!.value;
    u.phone = this.userForm.get(['phone'])!.value;
    u.email = this.userForm.get(['email'])!.value;

    return u;

  }

  private createFromForm1(): IUser{

    return {
      ...new User(),
      id : this.user.id,
      username : this.user.username,
      lastName: this.userForm.get(['lastName'])!.value,
      name: this.userForm.get(['name'])!.value,
      phone: this.userForm.get(['phone'])!.value,
      email: this.userForm.get(['email'])!.value,
    };

  }

}
