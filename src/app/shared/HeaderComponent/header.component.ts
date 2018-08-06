import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../core/services/search.service';
import { AuthService } from '../../core/services/auth.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html'
})

export class Header implements OnInit, OnDestroy {
    isAuthenticated: boolean = false;
    private authserviceSubscription: Subscription;

    constructor(private searchService: SearchService, private authService: AuthService) { }

    ngOnInit() {
        this.authserviceSubscription = this.authService.isAuthenticated().subscribe((response: boolean) => {
            this.isAuthenticated = response;
        })
    }

    submitSearchValue(searchValue: string) {
        this.searchService.submitNewSearchValue(searchValue);
    }

    ngOnDestroy() {
        this.authserviceSubscription.unsubscribe();
    }
}