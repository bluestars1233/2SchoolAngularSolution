import { AppState, TodoContext } from "./state/state.type";

// The model representing the whole state of the application
export class PlaygroundState implements AppState {
    public todosContext: TodoContext = {todosEdit: [], todos: []};
}
