import { Todo } from "../models/todo.model";
import { Route } from "./route.interface";

export interface TodoListResponse extends Route {
  todoList: Todo[];
}