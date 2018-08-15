import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
    name: 'filterCompletedTodos',
    pure: false
})

export class FilterCompletedTodos implements PipeTransform {
    transform(list: Todo[], isCompleted: boolean): Todo[] {
        return list.filter(todo => todo.isCompleted === isCompleted);
    }
}