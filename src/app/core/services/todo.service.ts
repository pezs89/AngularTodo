import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TodoService {
    newTodo = new Subject<string>();

    todoObservable = this.newTodo.asObservable(); 

    addNewTodo(todoName: string): void{
        this.newTodo.next(todoName);
    }
}