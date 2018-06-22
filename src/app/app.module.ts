import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Header } from './shared/HeaderComponent/header.component';
import { PageNotFound } from './shared/PageNotFoundComponent/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './core/services/search.service';

import { TodosModule } from './modules/todos/todos.module';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        TodosModule,
        AppRoutingModule
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