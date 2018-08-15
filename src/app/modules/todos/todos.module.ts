import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { AddTodoComponent } './components/add-todo.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';

import { TodoService } from './services/todo.service';
import { TodoRouteChangeResolver } from './services/todo-route-change-resolver.service';

import { NameFilterPipe } from '../../core/pipes/name.pipe';
import { FilterCompletedTodos } from '../../core/pipes/filter-completed-todos.pipe';

import { TodoSidebarComponent } from './components/todo-sidebar.component';
import { TodosRoutingModule } from './todos-routing.module';
import { NavBarComponent } from '../../shared/NavBar/navbar.component';
import { ClickOutsideDirective } from '../../shared/ClickOutside/clickOutside.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TodosRoutingModule
    ],
    declarations: [
        TodosComponent,
        AddTodoComponent,
        TodoItemComponent,
        TodoListComponent,
        TodoSidebarComponent,
        NavBarComponent,
        NameFilterPipe,
        FilterCompletedTodos,
        ClickOutsideDirective
    ],
    providers: [
        TodoService,
        TodoRouteChangeResolver
    ],
    entryComponents: [
        TodoSidebarComponent
    ]
})

export class TodosModule { }