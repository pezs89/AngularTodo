import { Component, OnInit, OnDestroy, DoCheck, OnChanges } from '@angular/core';
import { Todo } from '../../../core/models/Todo';
import { TodoService } from '../services/todo.service';
import { SearchService } from '../../../core/services/search.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'todo-list',
    templateUrl: 'todoList.component.html'
})

export class TodoList implements OnInit, DoCheck, OnDestroy {
    public todoList: Todo[] = [];
    public searchQuery: string = '';
    public isVisible: boolean = false;
    public isButtonEnabled: boolean = false;
    private addNewTodoSubscription: Subscription;
    private filterQuerySubscription: Subscription;

    constructor(private todoService: TodoService,
        private searchService: SearchService) {
    }

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

    showCompletedTodos() {
        this.isVisible = !this.isVisible;
    }

    hasCompletedTodo() {
        return this.todoList.filter(todo => todo.isCompleted).length <= 0;
    }

    ngDoCheck() {
        this.isButtonEnabled = this.hasCompletedTodo();
    }

    ngOnDestroy() {
        this.addNewTodoSubscription.unsubscribe();
        this.filterQuerySubscription.unsubscribe();
    }
}