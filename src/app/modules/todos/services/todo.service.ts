import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Todo } from '../../../core/models/todo.model';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
    newTodo: Subject<Todo> = new Subject<Todo>();
    todoObservable: Observable<Todo> = this.newTodo.asObservable();

    constructor(private http: HttpClient) { }

    getAllTodos(): Observable<Todo[]> {
        return this.http.get<any>(`api/todos`).pipe(map(response => {
            return this.transformMultipleTodosList(response)
        }));
    }

    getTodos(id: number) {
        return this.http.get<Todo[]>(`api/todos/${id}`).pipe(map((response: any) => response.todoList));
    }

    addNewTodo(todoName: string) {
        this.http.post('api/todos', new Todo(todoName, false)).subscribe((resp: Todo) => {
            this.newTodo.next(resp);
        })
    }

    private transformMultipleTodosList(multipleTodoListResponse: any) {
       return multipleTodoListResponse.map((response: any) => response.todoList).reduce((acc, val) => acc.concat(val), []);
    }
}