import { Component, OnInit } from '@angular/core';
import { User } from '../../api/user.model';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit{

  users: User[];

  
  constructor(private userService: UserService,  private router: Router){}

  ngOnInit(): void {

    this.userService.users().subscribe({
      next: (data: User[]) => { this.users = data; },
      error: () => { console.log(Error);
      this.router.navigate(['/auth/login']); 
       }, 
   });
  }

  

}
