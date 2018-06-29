import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Todo } from '../../../core/models/Todo';

@Injectable()
export class TodoService {
    newTodo: Subject<Todo> = new Subject<Todo>();
    todoObservable: Observable<Todo> = this.newTodo.asObservable();

    constructor(private http: HttpClient) { }

    getAllTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>('api/todos');
    }

    addNewTodo(todoName: string) {
        this.http.post('api/todos', new Todo(todoName, false)).subscribe((resp: Todo) => {
            this.newTodo.next(resp);
        })
    }
}