import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'add-todo',
    templateUrl: './addTodo.component.html'
})

export class AddTodoComponent {
    @Output('todoItem') todoCreated = new EventEmitter();

    addNewTodo(newTodo: string): void {
        this.todoCreated.emit(newTodo);
    }
}