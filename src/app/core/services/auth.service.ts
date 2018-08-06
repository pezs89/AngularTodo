import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Credentials } from '../interfaces/credentials';
import { Observable, Subject } from '../../../../node_modules/rxjs';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  private user: User;
  private isLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  login(loginCredentials: Credentials) {
    this.http.post('api/login', loginCredentials, httpOptions).subscribe((resp) => {
      this.getUserInformations(resp as Credentials);
    })
  }

  logout() {
    this.user = null;
    this.isLoggedIn.next(false);
  }

  getUserInformations(userCredentials: Credentials, ) {
    this.http.get('api/user').subscribe((resp: User[]) => {
      this.user = resp.find((user: User) => user.email === userCredentials.email);
      localStorage.setItem('sessionId', this.user.id.toString());
      this.navigateTo('todos');
    })
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  getLoggedUser(): User {
    return { ...this.user };
  }

  setLoggedIn() {
    this.isLoggedIn.next(true);
  }
}