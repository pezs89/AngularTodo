import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatRippleModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/AddTodoComponent/addTodo.component';
import { TodoList } from './components/TodoListComponent/todoList.component';
import { TodoItem } from './components/TodoItemComponent/todoItem.component';
import { Header } from './components/HeaderComponent/header.component';
import { TodoService } from './core/services/todo.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatRippleModule 
    ],
    declarations: [
        AppComponent,
        AddTodoComponent,
        TodoList,
        TodoItem,
        Header
    ],
    providers: [
        TodoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }