import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { catchError, map, tap } from 'rxjs/operators';
import { BusinessRegister } from './models/businesRegister.model';

@Injectable()
export class RegisterService {

  private apiUrl = '/helpet/register';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*' })
  };

  constructor(
    private http: HttpClient) { }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, this.httpOptions).pipe(
      tap((newUser: User) => console.log(`added hero w/ id=${newUser.username}`))
    );
  }

  registerBusiness(business: BusinessRegister): Observable<BusinessRegister> {
    return this.http.post<BusinessRegister>(this.apiUrl + '/business', business, this.httpOptions).pipe(
      tap((newUser: BusinessRegister) => console.log(`added hero w/ id=${newUser}`))
    );
  }
}
