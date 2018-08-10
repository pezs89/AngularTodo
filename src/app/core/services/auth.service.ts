import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Credentials } from '../interfaces/credentials';
import { Observable, BehaviorSubject } from '../../../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {
  private user: User;
  private sessionId: BehaviorSubject<string> = new BehaviorSubject<string>(localStorage.getItem('sessionId'));

  constructor(private http: HttpClient, private router: Router) { }

  login(loginCredentials: Credentials) {
    this.http.post('api/login', loginCredentials, httpOptions).subscribe((resp: Credentials) => {
      this.getUserInformations(resp.email);
    })
  }

  logout() {
    this.user = null;
    localStorage.removeItem('sessionId');
    localStorage.removeItem('email');
    this.sessionId.next(localStorage.getItem('sessionId'));
    this.navigateTo('login');
  }

  getUserInformations(userEmail: string) {
    this.http.get('api/user').subscribe((resp: User[]) => {
      this.user = resp.find((user: User) => user.email === userEmail);
      localStorage.setItem('sessionId', this.user.id.toString());
      localStorage.setItem('email', this.user.email);
      this.setLoggedIn();
      this.navigateTo('todos');
    })
  }

  navigateTo(route: string) {
    this.router.navigate([`/${route}`]);
  }

  isAuthenticated(): Observable<string> {
    return this.sessionId.asObservable();
  }

  getLoggedUser(): User {
    return { ...this.user };
  }

  setLoggedIn() {
    this.sessionId.next(localStorage.getItem('sessionId'));
  }
}