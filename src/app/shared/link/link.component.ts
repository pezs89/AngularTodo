import { Component, Input } from '@angular/core';
import { Route } from '../../core/interfaces/route.interface';

@Component({
  selector: 'link-component',
  templateUrl: 'link.component.html'
})

export class LinkComponent {
  @Input() navItem: Route;
  @Input() baseUrl: string;
  get hasIcon() {
    return !!this.navItem.iconClass;
  }
}