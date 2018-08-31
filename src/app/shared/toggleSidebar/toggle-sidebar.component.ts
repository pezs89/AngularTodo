import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'toggle-sidebar',
    templateUrl: './toggle-sidebar.component.html'
})

export class ToggleSidebarComponent {
    isOpened: boolean = true;
    @Output() isToggled: EventEmitter<boolean> = new EventEmitter();

    toggleMenu() {
        this.isOpened = !this.isOpened;
        this.isToggled.emit(this.isOpened);
    }
}