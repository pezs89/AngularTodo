import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../core/services/todo.service';

@Component({
    selector: 'add-todo',
    templateUrl: './addTodo.component.html'
})

export class AddTodoComponent implements OnInit {
    isValid: boolean = false;

    constructor(public todoService: TodoService) { }
    ngOnInit() { }

    addNewTodo(newTodo: string): void {
        this.setValidity(newTodo);

        if (this.isValid) {
            this.todoService.addNewTodo(newTodo);
        }
    }

    setValidity(value: string): void {
        this.isValid = value.length === 0 ? false : true;
    }
}