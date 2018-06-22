import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Todos } from './todos.component';
import { AddTodo } from './components/addTodo.component';
import { TodoItem } from './components/todoItem.component';
import { TodoList } from './components/todoList.component';

import { TodoService } from './services/todo.service';
import { NameFilterPipe } from '../../core/pipes/name.pipe';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TodosRoutingModule
    ],
    declarations: [
        Todos,
        AddTodo,
        TodoItem,
        TodoList,
        NameFilterPipe
    ],
    providers: [
        TodoService
    ]
})

export class TodosModule { }