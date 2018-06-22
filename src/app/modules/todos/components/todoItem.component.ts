import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../core/models/Todo';

@Component({
    selector: 'todo-item',
    templateUrl: './todoItem.component.html',
})

export class TodoItem {
    @Input() todo: Todo;
    @Output() deletableTodo = new EventEmitter<string>();

    deleteTodo() {
        this.deletableTodo.emit(this.todo.id);
    }

    toggleComplete() {
        this.todo.isCompleted = !this.todo.isCompleted;
    }
}