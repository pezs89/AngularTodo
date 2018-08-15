import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { AddTodoComponent } from './components/add-todo.component';
import { TodoItemComponent } from './components/todo-item.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoSidebarComponent } from './components/todo-sidebar.component';

import { TodoService } from './services/todo.service';
import { TodoRouteChangeResolver } from './services/todo-route-change-resolver.service';

import { NameFilterPipe } from '../../core/pipes/name.pipe';
import { FilterCompletedTodos } from '../../core/pipes/filter-completed-todos.pipe';
import { NavBarComponent } from '../../shared/NavBar/navbar.component';
import { ClickOutsideDirective } from '../../shared/ClickOutside/clickOutside.directive';
import { LinkComponent } from '../../shared/link/link.component';

import { TodosRoutingModule } from './todos-routing.module';

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
        ClickOutsideDirective,
        LinkComponent
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