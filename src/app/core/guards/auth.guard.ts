import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators/';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(map((sessionId: string) => {
      if (!sessionId) {
        this.router.navigate(['/login'])
        return false;
      }
      this.authService.getUserInformations(localStorage.getItem('email'));
      return true;
    }))
  }
}