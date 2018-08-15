import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { Todo } from '../../../core/models/todo.model';
import { TodoSidebarComponent } from './todo-sidebar.component';
import { SidebarService } from '../../../core/services/sidebar.service';

@Component({
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
})

export class TodoItemComponent {
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
        this.sidebarService.openTodoSidebar(TodoSidebarComponent, this.todo);
    }
}