import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html'
})

export class NavBarComponent {
  @Input() baseUrl: string;
  @Input() navItems: Route[];
  @Input() hasFixedElements: boolean;
  @Output() createNewRouteCallback: EventEmitter<string> = new EventEmitter();

  createNewRoute(newRouteName: string) {
    console.log(newRouteName)
    this.createNewRouteCallback.emit(newRouteName);
  }
}