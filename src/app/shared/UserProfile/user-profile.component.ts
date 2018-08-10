import { Component, Input } from '@angular/core';
import { User } from '../../core/models/User';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.component.html'
})

export class UserProfile {
  @Input('loggedUser') userData: User;

  constructor(private authService: AuthService) { }
  
  logout() {
    this.authService.logout();
  }
}
