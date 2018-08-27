import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from '../../../../node_modules/rxjs';
import { SearchService } from '../../core/services/search.service';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user.model';

@Component({
    selector: 'header-component',
    templateUrl: 'header.component.html'
})

export class Header implements OnInit, OnDestroy {
    isAuthenticated: boolean = false;
    user: User;
    private authserviceSubscription: Subscription;

    constructor(private searchService: SearchService, private authService: AuthService) { }

    ngOnInit() {
        this.authserviceSubscription = this.authService.sessionIdObserver.subscribe((sessionId: string) => {
            this.isAuthenticated = !!sessionId;
            if (this.isAuthenticated) {
                this.user = this.authService.getLoggedUser();
            }
        })
    }

    submitSearchValue(searchValue: string) {
        this.searchService.submitNewSearchValue(searchValue);
    }

    ngOnDestroy() {
        this.authserviceSubscription.unsubscribe();
    }
}