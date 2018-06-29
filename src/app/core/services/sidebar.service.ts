import { Injectable, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { Todos } from '../../modules/todos/todos.component';

@Injectable()
export class SidebarService {
    sidebar: any;
    constructor(private resolver: ComponentFactoryResolver) { }

    openTodoSidebar(todos: Todos, component: any, data: any) {
        let factory = this.resolver.resolveComponentFactory(component);
        this.sidebar = todos.container.createComponent(factory);
        this.sidebar.instance.selectedTodo = data;
        this.sidebar.instance.viewContainerRef = todos.container;
    }

    closeSidebar(viewContainerRef: any) {
        viewContainerRef.detach();
    }
}