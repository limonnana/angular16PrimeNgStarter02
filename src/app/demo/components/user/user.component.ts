import { Component, OnInit } from '@angular/core';
import { User } from '../../api/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit{

  users: User[];

  constructor(private userService: UserService){}

  ngOnInit(): void {

    this.userService.users().subscribe({
      next: (data: User[]) => { this.users = data; },
      error: () => { console.log(Error); }, 
   });
  }

  

}
