import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants/app.constants';
import { IUser } from '../api/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  public resourceUrl = AppConstants.API_ENDPOINT + 'users';

  constructor(private http: HttpClient) {}

  create(user: IUser): Observable<IUser> {
    console.log('url:' + this.resourceUrl + '/register');
    return this.http.post<any>(this.resourceUrl + '/register', user);
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

  find(login: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.resourceUrl}/${login}`);
  }

  users(): Observable<HttpResponse<IUser[]>> {
    return this.http.get<IUser[]>(this.resourceUrl, { observe: 'response' });
  }

  delete(login: string): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${login}`);
  }

  

 
}
