import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Todo } from '../../../core/models/Todo';
import { TodoSidebar } from './todoSidebar.component';
import { SidebarService } from '../../../core/services/sidebar.service';

@Component({
    selector: 'todo-item',
    templateUrl: 'todoItem.component.html',
})

export class TodoItem {
    @Input() todo: Todo;
    @Output() deletableTodo = new EventEmitter<string>();
    todoSidebar: any;

    constructor(private sidebarService: SidebarService) { }

    deleteTodo() {
        this.deletableTodo.emit(this.todo.id);
    }

    toggleComplete() {
        this.todo.isCompleted = !this.todo.isCompleted;
    }

    openSidebar() {
        this.sidebarService.openTodoSidebar(TodoSidebar, this.todo);
    }
}