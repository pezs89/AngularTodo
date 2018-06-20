import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from '../../../../models/Todo';
import { TodoService } from '../../../../core/services/todo.service';
import { SearchService } from '../../../../core/services/search.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'todo-list',
    templateUrl: './todoList.component.html'
})

export class TodoList implements OnInit, OnDestroy {
    public todoList: Todo[] = [];
    public searchQuery: string = '';
    private addNewTodoSubscription: Subscription;
    private filterQuerySubscription: Subscription;

    constructor(private todoService: TodoService, private searchService: SearchService) { }

    ngOnInit() {
        this.addNewTodoSubscription = this.todoService.todoObservable.subscribe(newTodo => {
            this.todoList.push(newTodo)
        })

        this.filterQuerySubscription = this.searchService.searchQueryObserver.subscribe(newQuery => {
            this.searchQuery = newQuery;
        })
    }

    deleteTodo(id: string) {
        this.todoList = this.filterList(id);
    }

    filterList(id: string) {
        return this.todoList.filter(todo => todo.id !== id);
    }

    ngOnDestroy() {
        this.addNewTodoSubscription.unsubscribe();
        this.filterQuerySubscription.unsubscribe();
    }
}