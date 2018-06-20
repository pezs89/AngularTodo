import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        loadChildren: 'app/modules/todos/todos.module#TodosModule'
    }
]

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})

export class AppRoutingModule { }