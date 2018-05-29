import { Component, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
    selector: 'todo-list',
    templateUrl: './todoList.component.html'
})

export class TodoList {
    @Input() todoList: Todo[];
}