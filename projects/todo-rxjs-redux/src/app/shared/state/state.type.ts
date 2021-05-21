// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TodoItem {
  id: number;
  checked: boolean;
  description: string;
  lastModified: Date;
}

export interface TodoContext {
  todos: TodoItem[];
  todosEdit: TodoItem[];
}

export interface AppState {

}
