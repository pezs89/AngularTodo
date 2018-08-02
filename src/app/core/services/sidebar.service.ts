import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Injectable()
export class SidebarService {
    viewRef: ViewContainerRef;
    constructor(private resolver: ComponentFactoryResolver) { }

    setViewContainer(viewContainer: ViewContainerRef) {
        this.viewRef = viewContainer;
    }

    openTodoSidebar(component: any, data: any) {
        this.closeSidebar();
        const factory = this.resolver.resolveComponentFactory(component);
        const componentRef: any = this.viewRef.createComponent(factory);
        componentRef.instance.data = data;
    }

    closeSidebar() {
        this.viewRef.clear();
    }
}