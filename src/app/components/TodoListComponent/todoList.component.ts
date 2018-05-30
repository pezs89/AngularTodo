import { Component, Input, Inject, forwardRef } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../core/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'todo-list',
    templateUrl: './todoList.component.html'
})

export class TodoList {
    todoList: Todo[] = [];
    subscription: Subscription;

    constructor(@Inject(forwardRef(() => TodoService)) private todoService: TodoService) {
        this.subscription = todoService.todoObservable.subscribe(newName => {
            this.todoList.push(new Todo(newName, false))
        })
    }
}