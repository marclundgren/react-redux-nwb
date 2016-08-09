let nextTodoId = 0;
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
export const clearCompleted = () => {
  return {
    type: 'REMOVE_COMPLETED_TODOS'
  };
};
export const toggleAllTodos = () => {
  return {
    type: 'TOGGLE_ALL_TODOS'
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
export const toggleAllCompleted = () => {
  return {
    type: 'TOGGLE_ALL_TODOS_COMPLETED'
  };
};
export const toggleAllInProgress = () => {
  return {
    type: 'TOGGLE_ALL_TODOS_IN_PROGRESS'
  };
};

export const removeTodo = (id) => {
  return {
    type: 'REMOVE_TODO',
    id
  };
};
