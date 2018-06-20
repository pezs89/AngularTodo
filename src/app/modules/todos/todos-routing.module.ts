import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';

const childRoutes: Routes = [
    {
        path: 'todos',
        component: TodosComponent
    }
]

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forChild(childRoutes)
    ]
})

export class TodosRoutingModule { }