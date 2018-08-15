import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from '../../../core/models/todo.model';
import { TodoService } from '../services/todo.service';
import { SearchService } from '../../../core/services/search.service';

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html'
})

export class TodoListComponent implements OnInit, DoCheck, OnDestroy {
    public todoList: Todo[] = [];
    public searchQuery: string = '';
    public isVisible: boolean = false;
    public isButtonEnabled: boolean = false;
    private addNewTodoSubscription: Subscription;
    private filterQuerySubscription: Subscription;
    private routeChangeSubscription: Subscription;

    constructor(private todoService: TodoService,
        private searchService: SearchService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.routeChangeSubscription = this.route.data.subscribe((data: { todoList: Todo[] }) => {
            this.todoList = data.todoList;
        })

        this.addNewTodoSubscription = this.todoService.todoObservable.subscribe(newTodo =>
            this.todoList.push(newTodo)
        );

        this.filterQuerySubscription = this.searchService.searchQueryObserver.subscribe(newQuery => {
            this.searchQuery = newQuery;
        });
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
        this.routeChangeSubscription.unsubscribe();
    }
}