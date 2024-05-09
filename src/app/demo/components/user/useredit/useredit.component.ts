import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { User } from 'src/app/demo/api/user.model';
import { UserService } from 'src/app/demo/service/user.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrl: './useredit.component.scss'
})
export class UsereditComponent {

  username? : string;
  user? : User;


    constructor(private route: ActivatedRoute, private userService: UserService,  private fb: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.userService.getUserByUsername(this.username).subscribe({
      next: (data: User) => { this.user = data; },
      error: () => { 
        console.log(Error); 
        this.router.navigate(['/auth/login']); 
      }, 
   });
  }

  userForm = this.fb.group({
    email: ['', [Validators.minLength(10), Validators.maxLength(254)]],
    name: ['', [Validators.minLength(10), Validators.maxLength(35)]],
    lastName: ['', [Validators.minLength(10), Validators.maxLength(35)]],
    phone: ['', [Validators.minLength(10), Validators.maxLength(10)]],
    password: ['',[Validators.required, Validators.maxLength(50)]]
});

  save(): void {}

}
