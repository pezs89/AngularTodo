import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html'
})

export class NavBarComponent {
  @Input() baseUrl: string;
  @Input() navItems: Route[];
}