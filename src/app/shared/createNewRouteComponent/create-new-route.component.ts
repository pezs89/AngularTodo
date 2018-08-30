import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { NewRoute } from '../../core/interfaces/new-route.interface';

@Component({
    selector: 'create-new-route',
    templateUrl: './create-new-route.component.html'
})

export class CreateNewRouteComponent {
    isInEditMode: boolean = false;
    private inputRef: ElementRef; 
    private newRoute: NewRoute = {
        name: '',
        iconClass: 'fas fa-band-aid'
    };

    @ViewChild('createInput') set inputElementRef(content: ElementRef) {
        if (content) {
            this.inputRef = content;
            this.inputRef.nativeElement.focus();
        } else {
            this.inputRef = undefined;
        }
    }

    @Output() newElementCreated: EventEmitter<NewRoute> = new EventEmitter();

    toggleEditMode() {
        this.isInEditMode = !this.isInEditMode;
    }

    createNewElement(inputValue: string) {
        if (inputValue.length > 0) {
            this.newRoute.name = inputValue;
            this.newElementCreated.emit(this.newRoute);
            this.clearInput();
            this.toggleEditMode();
        }
    }

    clearInput() {
        this.inputRef.nativeElement.value = '';
    }

    handleIconChange(iconClass: string) {
        this.newRoute.iconClass = iconClass;
    }
}
