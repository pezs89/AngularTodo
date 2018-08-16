import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { TodoService } from './services/todo.service';
import { SidebarService } from '../../core/services/sidebar.service';
import { Route } from '../../core/interfaces/route.interface';

@Component({
    templateUrl: 'todos.component.html'
})

export class TodosComponent implements OnInit {
    routes: Route[];
    baseUrl: string = '/todos';
    @ViewChild('todosModuleContainer', { read: ViewContainerRef }) container: ViewContainerRef;

    constructor(private sidebarService: SidebarService, private todoService: TodoService) { }

    ngOnInit() {
        this.sidebarService.setViewContainer(this.container);
        this.todoService.getRoutes().subscribe((response: Route[]) => {
            this.routes = this.addAllRoute(response);
        })
    }

    private addAllRoute(routes: Route[]): Route[] {
        routes.unshift({ id: 'all', name: 'All', iconClass: 'fa-newspaper-o' })
        return routes;
    }
}