import {TodoItem} from './../models/todo.types';

export interface TodoState {
    todos: TodoItem[];
    todosEdit: TodoItem[];
}
