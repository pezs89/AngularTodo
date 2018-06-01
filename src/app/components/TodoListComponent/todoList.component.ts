import { Component, Input } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../core/services/todo.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'todo-list',
    templateUrl: './todoList.component.html'
})

export class TodoList {
    private todoList: Todo[] = [];
    
    constructor(private todoService: TodoService) {
        todoService.todoObservable.subscribe(newTodo => {
            this.todoList.push(newTodo)
        })
    }
}