import { todoReducer, initialState } from './todo.reducer';
import { TodoActions } from '../actions';
import { TodoItem } from '../models/todo.types';
import { TodoState } from './todo.state';

describe('TodoReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;

      const result = todoReducer(undefined, action);
      expect(result.todos).toEqual([]);
      expect(result.todosEdit).toEqual([]);
    });
  });

  describe(TodoActions.loadComplete.name, () => {
    it('loaded data should be passed on to the state', () => {
      const items = [createTodoItemBy(1), createTodoItemBy(2)];
      const loadCompleteAction = TodoActions.loadComplete({ items });

      const result = todoReducer(initialState, loadCompleteAction);

      expect(result.todos.length).toBe(items.length);
      expect(result.todosEdit.length).toBe(items.length);
      expect(result.todos).not.toBe(result.todosEdit);
      expect(result.todos[0]).not.toBe(result.todosEdit[0]);
    });
  });

  describe(TodoActions.check.name, () => {
    it('should check item with proper id', () => {
      testCheckBy(true);
    });

    it('should uncheck item with proper id', () => {
      testCheckBy(false);
    });

    function testCheckBy(checked: boolean) {
      const checkId = 1;
      const todos = [createTodoItemBy(checkId)];
      const todosEdit = [createTodoItemBy(checkId, !checked)];

      const testState = {
        todos,
        todosEdit
      } as TodoState;

      const checkAction = TodoActions.check({ id: checkId, checked });
      const result = todoReducer(testState, checkAction);

      expect(result.todosEdit[0].checked).toBe(checked);
      expect(result.todosEdit[0]).not.toBe(todosEdit[0]);
    }
  });

  describe(TodoActions.add.name, () => {
    it('should add todo', () => {
      const origId = 1;
      const todos = [createTodoItemBy(origId)];
      const todosEdit = [createTodoItemBy(1), createTodoItemBy(2)];

      const testState = {
        todos,
        todosEdit
      } as TodoState;

      const toAddId = 3;
      const addAction = TodoActions.add({ toAdd: createTodoItemBy(toAddId) });
      const result = todoReducer(testState, addAction);

      expect(testState.todosEdit).toBe(todosEdit);
      expect(result.todosEdit.length).toBe(3);
      expect(result.todosEdit[2].id).toBe(toAddId);
      expect(result.todosEdit).not.toBe(todosEdit);
    });
  });

  describe(TodoActions.addModified.name, () => {
    it('should update modified date', () => {
      const modifiedId = 1;
      const todos = [createTodoItemBy(1)];
      const todosEdit = [createTodoItemBy(modifiedId), createTodoItemBy(2)];

      const testState = {
        todos,
        todosEdit
      } as TodoState;

      const modifiedAction = TodoActions.addModified({ id: modifiedId });
      const result = todoReducer(testState, modifiedAction);

      expect(testState.todosEdit[0].lastModified).not.toBeDefined();
      expect(testState.todosEdit).toBe(todosEdit);
      expect(result.todosEdit[0].lastModified).toBeDefined();
      expect(result.todosEdit[0]).not.toBe(todosEdit[0]);
    });
  });

  describe(TodoActions.reset.name, () => {
    it('should reset todos edit', () => {
      const origId = 1;
      const todos = [createTodoItemBy(origId)];
      const todosEdit = [createTodoItemBy(1), createTodoItemBy(2)];

      const testState = {
        todos,
        todosEdit
      } as TodoState;

      const resetAction = TodoActions.reset();
      const result = todoReducer(testState, resetAction);

      expect(testState.todosEdit).toEqual(todosEdit);
      expect(result.todosEdit.length).toBe(1);
      expect(result.todosEdit[0].id).toBe(origId);
      expect(result.todosEdit[0]).not.toBe(todos[0]);
    });
  });

  function createTodoItemBy(id: number, checked = false): TodoItem {
    return {
      lastModified: undefined,
      checked,
      id: id,
      description: 'some'
    } as TodoItem;
  }
});
