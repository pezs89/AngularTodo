import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Todos } from './todos.component';

const childRoutes: Routes = [
    {
        path: 'todos',
        component: Todos
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