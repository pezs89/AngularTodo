import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent } from './todos.component';
import { AddTodoComponent } from './components/AddTodoComponent/addTodo.component';
import { TodoItem } from './components/TodoItemComponent/todoItem.component';
import { TodoList } from './components/TodoListComponent/todoList.component';

import { TodoService } from '../../core/services/todo.service';
import { NameFilterPipe } from '../../core/pipes/name.pipe';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TodosRoutingModule
    ],
    declarations: [
        TodosComponent,
        AddTodoComponent,
        TodoItem,
        TodoList,
        NameFilterPipe
    ],
    providers: [
        TodoService
    ]
})

export class TodosModule { }