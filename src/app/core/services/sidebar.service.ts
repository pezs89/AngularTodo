import { Injectable, ViewChild, ViewContainerRef } from '@angular/core';

@Injectable()
export class SidebarService {
    @ViewChild('todosModuleContainer') container: ViewContainerRef;
    
    constructor() { }
}