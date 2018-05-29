import { Component } from '@angular/core';
import { Todo } from './models/Todo';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    todoList: Todo[] = [];

    onNewTodoAdd(newTodoName: string) {
        this.todoList.push(new Todo(newTodoName, false));
    }
}