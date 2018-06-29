import { Component, Input, Output, EventEmitter, ComponentFactoryResolver } from '@angular/core';
import { Todo } from '../../../core/models/Todo';
import { TodoSidebar } from './todoSidebar.component';
import { Todos } from '../todos.component';

@Component({
    selector: 'todo-item',
    templateUrl: 'todoItem.component.html',
})

export class TodoItem {
    @Input() todo: Todo;
    @Output() deletableTodo = new EventEmitter<string>();
    todoSidebar: any;

    constructor(private resolver: ComponentFactoryResolver,
        private parent: Todos) {
    }

    deleteTodo() {
        this.deletableTodo.emit(this.todo.id);
    }

    toggleComplete() {
        this.todo.isCompleted = !this.todo.isCompleted;
    }

    openSidebar() {
        let factory = this.resolver.resolveComponentFactory(TodoSidebar);
        this.todoSidebar = this.parent.container.createComponent(factory);
        this.todoSidebar.instance.selectedTodo = this.todo;
        this.todoSidebar.instance.viewContainerRef = this.parent.container;
    }
}