import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoRouteChangeResolver } from './services/todo-route-change-resolver.service';

const childRoutes: Routes = [
    {
        path: 'todos',
        component: TodosComponent,
        children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            {
                path: ':id', component: TodoListComponent, resolve: {
                    todoList: TodoRouteChangeResolver
                }
            }
        ]
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