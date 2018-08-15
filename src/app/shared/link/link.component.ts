import { Component, Input } from '@angular/core';

@Component({
  selector: 'link-component',
  templateUrl: 'link.component.html'
})

export class LinkComponent {
  @Input() navItem: any;
  @Input() baseUrl: string;
}