import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { SidebarService } from '../../core/services/sidebar.service';

@Component({
    templateUrl: 'todos.component.html'
})

export class Todos implements OnInit {
    @ViewChild('todosModuleContainer', { read: ViewContainerRef }) container: ViewContainerRef;

    constructor(private sidebarService: SidebarService) { }

    ngOnInit() {
        this.sidebarService.setViewContainer(this.container);
    }
}