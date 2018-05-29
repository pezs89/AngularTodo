export class Todo {
    todoName: string;
    isCompleted: boolean;

    constructor(todoName?: string, isCompleted?: boolean) {
        this.todoName = todoName;
        this.isCompleted = isCompleted;
    }
}