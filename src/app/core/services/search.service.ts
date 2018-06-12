import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    searchQuery = new Subject<string>();
    searchQueryObserver = this.searchQuery.asObservable();

    submitNewSearchValue(searchString: string) {
        this.searchQuery.next(searchString);
    }
}