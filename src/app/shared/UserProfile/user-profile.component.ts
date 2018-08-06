import { Component, Input } from '@angular/core';
import { User } from '../../core/models/User';

@Component({
  selector: 'user-profile',
  templateUrl: 'user-profile.component.html'
})

export class UserProfile {
  @Input('userInfos') userData: User;
}
