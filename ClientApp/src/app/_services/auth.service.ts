import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, fromEventPattern, ObservableInput } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {User} from '../_models/User'
import { JwtResponse } from '../_models/JwtResponse';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    apiUrl = environment.apiUrl;
  error: (err: any, caught: Observable<Object>) => ObservableInput<any>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(model) {
      try{
        localStorage.removeItem('access_token');
        const tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 'Content-Type': 'application/json' });
        const body = JSON.stringify(model);
          let API_URL = `${this.apiUrl}/api/Authenticate/login`;
            return this.http.post<{token:  string}>(API_URL, body, {'headers':tokenHeader}).pipe(tap(res => {
              localStorage.setItem('access_token', res.token);
          })); 
      } 
      catch(ex){

      }
     
      return ;
       
    }


    register(model) {
      try{
        const tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('access_token'), 'Content-Type': 'application/json' });
        const body = JSON.stringify(model);
          let API_URL = `${this.apiUrl}/api/Authenticate/register`;
            return this.http.post<{token:  string}>(API_URL, body, {'headers':tokenHeader}).pipe(tap(res => {
          })); 
      } 
      catch(ex){

      }
     
      return ;
       
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}