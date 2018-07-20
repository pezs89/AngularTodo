import { Component, Input, ViewContainerRef } from "@angular/core";
import { Todo } from "../../../core/models/Todo";
import { SidebarService } from "../../../core/services/sidebar.service";

@Component({
    templateUrl: 'todoSidebar.component.html'
})

export class TodoSidebar {
    @Input() selectedTodo: Todo;
    @Input() viewContainerRef: ViewContainerRef;

    constructor(private sidebarService: SidebarService) { }

    closeSidebar() {    
        this.sidebarService.closeSidebar();
    }

    saveTodo() {
        console.log(this.selectedTodo);
        this.closeSidebar();
    }
}