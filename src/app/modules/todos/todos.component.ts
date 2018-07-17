import { Component, ViewContainerRef, ViewChild } from '@angular/core';

@Component({
    templateUrl: 'todos.component.html'
})

export class Todos {
    @ViewChild('todosModuleContainer', { read: ViewContainerRef }) container: ViewContainerRef;
}