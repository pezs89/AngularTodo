import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html'
})

export class NavBarComponent {
  baseUrl: string = '/todos';
  @Input() navItems = [{ name: 'asd', id: 1 }, { name: 'asd1', id: 2 }];
}