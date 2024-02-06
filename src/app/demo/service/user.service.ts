import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/app.constants';
import { IUser, User } from '../api/user.model';
import { ILogin } from '../api/login';

@Injectable({ providedIn: 'root' })
export class UserService {
  public resourceUrl = AppConstants.API_ENDPOINT + 'users';

  public resourceAuthUrl = AppConstants.API_AUTH;

  constructor(private http: HttpClient) {}

  create(user: IUser): Observable<IUser> {
    console.log('url:' + this.resourceUrl + '/register');
    return this.http.post<any>(this.resourceAuthUrl + '/register', user);
  }

  test(user: IUser):Observable<any> {
    console.log('url:' + this.resourceUrl + '/hola');
    console.log('saludo: ' + user.password);
    let saludo= 'Hola como estas'
  return this.http.post<any>(this.resourceUrl + '/hola', saludo);
  }

  update(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(this.resourceUrl, user);
  }

  login(login: ILogin): Observable<IUser> | null{
    return this.http.post<IUser>(this.resourceAuthUrl + '/login' , login);
  }
  
  users(): Observable<User[]> {
    return this.http.get<User[]>(this.resourceUrl + '/users');
  }

  delete(login: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${login}`);
  }

  

 
}
