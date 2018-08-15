import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Todo } from '../../../core/models/todo.model';
import { map } from 'rxjs/operators';
import { TodoListResponse } from '../../../core/interfaces/todo-list-response.interface';

@Injectable()
export class TodoService {
    newTodo: Subject<Todo> = new Subject<Todo>();
    todoObservable: Observable<Todo> = this.newTodo.asObservable();

    constructor(private http: HttpClient) { }

    getAllTodos(): Observable<Todo[]> {
        return this.http.get<TodoListResponse[]>(`api/todos`).pipe(map((response: TodoListResponse[]) => {
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

    private transformMultipleTodosList(multipleTodoListResponse: TodoListResponse[]): Todo[] {
        return multipleTodoListResponse.map((response: TodoListResponse) => response.todoList).reduce((acc: Todo[], val: Todo[]) => [...acc, ...val], []);
    }
}