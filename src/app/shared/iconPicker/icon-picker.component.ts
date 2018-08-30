import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'icon-picker',
    templateUrl: './icon-picker.component.html'
})

export class IconPickerComponent {
    isOpen: boolean = false;
    selectedIcon: string = '';
    icons: string[] = [
        'fas fa-band-aid',
        'fas fa-book-open',
        'fas fa-theater-masks',
        'fas fa-school',
        'fas fa-microscope',
        'fas fa-rss',
        'fas fa-landmark',
        'fas fa-dollar-sign',
        'fas fa-shopping-cart',
        'fas fa-tags',
        'fas fa-search-location'
    ];

    @Output() iconSelectionChanged: EventEmitter<string> = new EventEmitter();

    onClickedOutside(isOutside: boolean) {
        console.log(isOutside)
        if (isOutside) {
            this.isOpen = false;
        }
    }

    togglePicker() {
        this.isOpen = !this.isOpen;
    }

    selectIcon(iconClass: string) {
        this.selectedIcon = iconClass;
        this.iconSelectionChanged.emit(this.selectedIcon);
    }
}