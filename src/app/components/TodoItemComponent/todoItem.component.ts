import { Component, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
    selector: 'todo-item',
    templateUrl: './todoItem.component.html'
})

export class TodoItem {
    @Input() todo: Todo;
}