import { Component, Input, ElementRef } from "@angular/core";
import { Todo } from "../../../core/models/todo.model";
import { SidebarService } from "../../../core/services/sidebar.service";

@Component({
    templateUrl: 'todo-sidebar.component.html'
})

export class TodoSidebarComponent {
    @Input() data: Todo;

    constructor(private sidebarService: SidebarService, public elementRef: ElementRef) { }

    closeSidebar() {
        this.sidebarService.closeSidebar();
    }

    saveTodo(todoForm: FormData) {
        this.closeSidebar();
    }

    onClickedOutside(isOutside: boolean) {
        if (isOutside) {
            this.closeSidebar();
        }
    }
}