import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Todos } from './todos.component';
import { AddTodo } from './components/addTodo.component';
import { TodoItem } from './components/todoItem.component';
import { TodoList } from './components/todoList.component';

import { TodoService } from './services/todo.service';
import { AuthGuard } from '../../core/guards/auth.guard';

import { NameFilterPipe } from '../../core/pipes/name.pipe';
import { FilterCompletedTodos } from '../../core/pipes/filterCompletedTodos.pipe';

import { TodoSidebar } from './components/todoSidebar.component';
import { TodosRoutingModule } from './todos-routing.module';
import { ClickOutsideDirective } from '../../shared/ClickOutside/clickOutside.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TodosRoutingModule
    ],
    declarations: [
        Todos,
        AddTodo,
        TodoItem,
        TodoList,
        TodoSidebar,
        NameFilterPipe,
        FilterCompletedTodos,
        ClickOutsideDirective
    ],
    providers: [
        TodoService
    ],
    entryComponents: [
        TodoSidebar
    ]
})

export class TodosModule { }