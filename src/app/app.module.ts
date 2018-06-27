import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { Header } from './shared/HeaderComponent/header.component';
import { PageNotFound } from './shared/PageNotFoundComponent/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './core/services/search.service';

import { TodosModule } from './modules/todos/todos.module';
import { TodoMockInMemorySerice } from './core/mock/todo-mock.service';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        TodosModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(TodoMockInMemorySerice)
    ],
    declarations: [
        AppComponent,
        Header,
        PageNotFound
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule { }