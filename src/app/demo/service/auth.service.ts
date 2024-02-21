import { Injectable } from '@angular/core';
import { Role } from '../api/role';
import { User } from '../api/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  user: User;
  role: Role = Role.USER;

  getUserRole(): Role {
    this.user = JSON.parse(sessionStorage.getItem('sekurity-user'));

    if(this.user){

       if(this.user.isAdmin){
         this.role = Role.ADMIN; 
       }
    }
  return this.role;
  }

}