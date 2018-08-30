import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Todo } from '../../../core/models/todo.model';
import { Route } from '../../../core/interfaces/route.interface';
import { TodoListResponse } from '../../../core/interfaces/todo-list-response.interface';
import { v1 } from 'uuid';

@Injectable()
export class TodoService {
    newTodo: Subject<Todo> = new Subject<Todo>();
    todoObservable: Observable<Todo> = this.newTodo.asObservable();

    constructor(private http: HttpClient) { }

    getRoutes(): Observable<Route[]> {
        return this.http.get<TodoListResponse[]>(`api/todos`).pipe(map((response: TodoListResponse[]) => {
            return this.createRoutesList(response)
        }));
    }

    getAllTodos(): Observable<Todo[]> {
        return this.http.get<TodoListResponse[]>(`api/todos`).pipe(map((response: TodoListResponse[]) => {
            return this.transformMultipleTodosList(response)
        }));
    }

    createNewRoute(newTodoRoute: TodoListResponse) {
        return this.http.post('api/todos', newTodoRoute).pipe(resp => {
            return resp;
        });
    }

    getTodos(id: string) {
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

    private createRoutesList(multipleTodoListResponse: TodoListResponse[]): Route[] {
        return multipleTodoListResponse.map((response: TodoListResponse) => {
            const { todoList, ...route } = response;
            return route;
        });
    }
}