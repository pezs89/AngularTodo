import { Component, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../core/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'todo-list',
    templateUrl: './todoList.component.html'
})

export class TodoList {
    todoList: Todo[] = [];
    
    constructor(private todoService: TodoService) {
        todoService.todoObservable.subscribe(newName => {
            this.todoList.push(new Todo(newName, false))
        })
    }
}