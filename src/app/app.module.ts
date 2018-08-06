import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { Header } from './shared/HeaderComponent/header.component';
import { PageNotFound } from './shared/PageNotFoundComponent/page-not-found.component';
import { DatePicker } from './shared/DatePicker/datePicker.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './core/services/search.service';
import { SidebarService } from './core/services/sidebar.service';

import { TodosModule } from './modules/todos/todos.module';
import { LoginModule } from './modules/login/login.module';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';
import { TodoMockInMemorySerice } from './core/mock/todo-mock.service';
import { UserProfile } from './shared/UserProfile/user-profile.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        LoginModule,
        TodosModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(TodoMockInMemorySerice)
    ],
    declarations: [
        AppComponent,
        Header,
        UserProfile,
        PageNotFound,
        DatePicker
    ],
    providers: [
        SearchService,
        SidebarService,
        AuthService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }