import { Injectable } from '@angular/core';
import { TodoService } from './todo.service';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Todo } from '../../../core/models/todo.model';
import { Observable } from 'rxjs';

@Injectable()
export class TodoRouteChangeResolver implements Resolve<Todo[]>{
  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Todo[]> {
    const id = +route.paramMap.get('id');

    if (isNaN(id)) {
      return this.todoService.getAllTodos();
    } else {
      return this.todoService.getTodos(+id);
    }
  }
}