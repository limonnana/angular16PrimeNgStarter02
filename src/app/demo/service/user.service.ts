import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/app.constants';
import { IUser, User } from '../api/user.model';
import { ILogin } from '../api/login';

@Injectable({ providedIn: 'root' })
export class UserService {
  public resourceUrl = AppConstants.API_ENDPOINT;

  public resourceAuthUrl = AppConstants.API_AUTH;

  constructor(private http: HttpClient) {}

  user: User;
  username: string;

  token: any;

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
    this.user = JSON.parse(sessionStorage.getItem('sekurity-user'));
    this.token = this.user.token;
    console.log('url:' + this.resourceUrl + '/users');
    console.log('token:' + this.token);


    const headers = { 'Authorization': 'Bearer ' + this.token }
    return this.http.get<User[]>(this.resourceUrl + '/users', { headers });
  }

  getUserByUsername(username: string): Observable<IUser>{
    this.user = JSON.parse(sessionStorage.getItem('sekurity-user'));
    this.token = this.user.token;
    const headers = { 'Authorization': 'Bearer ' + this.token };
    this.username = username;
    return this.http.get<IUser>(this.resourceUrl + `/getuserbyusername/${username}` , { headers });
  }

  delete(login: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${login}`);
  }

  getUserToken(): any{
    this.user = JSON.parse(sessionStorage.getItem('sekurity-user'));
    this.token = this.user.token;
    const headers = { 'Authorization': 'Bearer ' + this.token }
    return headers;
  }

  

 
}
