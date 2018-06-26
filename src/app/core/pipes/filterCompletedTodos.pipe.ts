import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/Todo';

@Pipe({
    name: 'filterCompletedTodos',
    pure: false
})

export class FilterCompletedTodos implements PipeTransform {
    transform(list: Todo[], isCompleted: boolean): Todo[] {
        return list.filter(todo => todo.isCompleted === isCompleted);
    }
}