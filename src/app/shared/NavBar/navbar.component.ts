import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html'
})

export class NavBarComponent {
  isSidebarOpen: boolean = true;

  @Input() baseUrl: string;
  @Input() navItems: Route[];
  @Input() hasFixedElements: boolean;
  @Output() createNewRouteCallback: EventEmitter<string> = new EventEmitter();
  @Output() isCollapsed: EventEmitter<boolean> = new EventEmitter();

  createNewRoute(newRouteName: string) {
    this.createNewRouteCallback.emit(newRouteName);
  }

  toggleSidebar(isToggled: boolean) {
    this.isSidebarOpen = isToggled;
    this.isCollapsed.emit(this.isSidebarOpen);
  }
}