import { Component, OnInit } from '@angular/core';
import { IUser } from '../../api/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit{

  users: IUser[];

  ngOnInit(): void {
    
  }

}
