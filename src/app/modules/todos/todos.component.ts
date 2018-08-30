import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { TodoService } from './services/todo.service';
import { SidebarService } from '../../core/services/sidebar.service';
import { Route } from '../../core/interfaces/route.interface';
import { TodoListResponse } from '../../core/interfaces/todo-list-response.interface';
import { v1 } from 'uuid';
import { NewRoute } from '../../core/interfaces/new-route.interface';

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
        this.getAllRoutes();
    }

    private getAllRoutes() {
        this.todoService.getRoutes().subscribe((response: Route[]) => {
            this.routes = this.addAllRoute(response);
        })
    }

    private addAllRoute(routes: Route[]): Route[] {
        routes.unshift({ id: 'all', name: 'All', iconClass: 'far fa-newspaper' })
        return routes;
    }

    createNewRoute(newRoute: NewRoute) {
        const newTodoRoute: TodoListResponse = {
            id: v1(),
            name: newRoute.name,
            iconClass: newRoute.iconClass,
            todoList: []
        }

        this.todoService.createNewRoute(newTodoRoute).subscribe((response: TodoListResponse) => {
            if (response) {
                this.getAllRoutes();
            }
        })
    }
}