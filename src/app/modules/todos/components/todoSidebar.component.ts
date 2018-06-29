import { Component, Input, ViewContainerRef } from "@angular/core";
import { Todo } from "../../../core/models/Todo";

@Component({
    templateUrl: 'todoSidebar.component.html'
}) 

export class TodoSidebar {
    @Input() selectedTodo: Todo;
    @Input() viewContainerRef: ViewContainerRef;

    closeSidebar() {
        this.viewContainerRef.detach();
    }
}