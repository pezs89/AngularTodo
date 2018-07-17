import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Todos } from '../../modules/todos/todos.component';

@Injectable()
export class SidebarService {
    sidebar: any;
    constructor(private resolver: ComponentFactoryResolver) { }

    openTodoSidebar(todos: Todos, component: any, data: any) {
        if (this.sidebar) {
            this.sidebar.instance.viewContainerRef.detach();
        }
        let factory = this.resolver.resolveComponentFactory(component);
        this.sidebar = todos.container.createComponent(factory);
        this.sidebar.instance.selectedTodo = data;
        this.sidebar.instance.viewContainerRef = todos.container;
    }

    closeSidebar(viewContainerRef: ViewContainerRef) {
        viewContainerRef.detach();
    }
}