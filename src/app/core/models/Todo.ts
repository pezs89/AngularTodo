import { v1 } from 'uuid';

export class Todo {
    todoName: string;
    isCompleted: boolean;
    id: string;

    constructor(todoName?: string, isCompleted?: boolean) {
        this.id = v1();
        this.todoName = todoName;
        this.isCompleted = isCompleted;
    }
}