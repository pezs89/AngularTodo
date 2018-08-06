import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!localStorage.getItem('sessionId')) {
      this.router.navigate(['/login'])
      return false;
    }
    this.authService.setLoggedIn();
    return true;
  }
}