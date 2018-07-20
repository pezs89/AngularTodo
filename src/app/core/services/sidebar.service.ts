import { Injectable, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';

@Injectable()
export class SidebarService {
    viewRef: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }

    setViewContainer(viewContainer: ViewContainerRef) {
        this.viewRef = viewContainer;
    }

    openTodoSidebar(component: any, data: any) {
        this.closeSidebar();
        let factory = this.resolver.resolveComponentFactory(component);
        const componentRef: any = this.viewRef.createComponent(factory);
        componentRef.instance.selectedTodo = data;
    }

    closeSidebar() {
        this.viewRef.detach();
    }
}