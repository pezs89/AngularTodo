import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatRippleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { Header } from './shared/HeaderComponent/header.component';

import { AppRoutingModule } from './app-routing.module';
import { SearchService } from './core/services/search.service';

import { TodosModule } from './modules/todos/todos.module'
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatRippleModule,
        TodosModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        Header
    ],
    providers: [SearchService],
    bootstrap: [AppComponent]
})
export class AppModule { }