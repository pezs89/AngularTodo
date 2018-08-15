import { Todo } from "../models/todo.model";

export interface TodoListResponse {
  id: number;
  todoList: Todo[];
}