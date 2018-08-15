import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFound } from './shared/PageNotFoundComponent/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/todos',
        pathMatch: 'full'
    },
    {
        path: 'todos',
        loadChildren: 'app/modules/todos/todos.module#TodosModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: 'app/modules/login/login.module#LoginModule'
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