import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFound } from './shared/PageNotFoundComponent/page-not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        loadChildren: 'app/modules/todos/todos.module#TodosModule'
    },
    {
        path: '**',
        component: PageNotFound
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