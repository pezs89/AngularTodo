import { Component, Input, ElementRef } from "@angular/core";
import { Todo } from "../../../core/models/Todo";
import { SidebarService } from "../../../core/services/sidebar.service";

@Component({
    templateUrl: 'todoSidebar.component.html'
})

export class TodoSidebar {
    @Input() data: Todo;

    constructor(private sidebarService: SidebarService, public elementRef: ElementRef) { }

    closeSidebar() {
        this.sidebarService.closeSidebar();
    }

    saveTodo(todoForm: FormData) {
        console.log(this.data, todoForm);
        this.closeSidebar();
    }

    onClickedOutside(isOutside: boolean) {
        if (isOutside) {
            this.closeSidebar();
        }
    }
}