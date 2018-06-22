import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../core/services/search.service';

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html'
})

export class Header implements OnInit {
    constructor(private searchService: SearchService) { }

    ngOnInit() { }

    submitSearchValue(searchValue: string) {
        this.searchService.submitNewSearchValue(searchValue);
    }
}