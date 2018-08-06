import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Todos } from './todos.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const childRoutes: Routes = [
    {
        path: 'todos',
        component: Todos,
        canActivate: [AuthGuard]
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