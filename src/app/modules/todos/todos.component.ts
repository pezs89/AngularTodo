import { Component, ViewContainerRef } from '@angular/core';

@Component({
    templateUrl: 'todos.component.html'
})

export class Todos {
    constructor(public container: ViewContainerRef) {}
}