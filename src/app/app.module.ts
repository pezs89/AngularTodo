import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/AddTodoComponent/addTodo.component';
import { TodoList } from './components/TodoListComponent/todoList.component';
import { TodoItem } from './components/TodoItemComponent/todoItem.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        AddTodoComponent,
        TodoList,
        TodoItem
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }