const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    case 'TOGGLE_ALL_TODOS':
      let allCompleted = state.every((item) => {
        return item.completed;
      });

      return state.map(({id, text}) => {
        return { completed: !allCompleted, id, text };
      });
    case 'TOGGLE_ALL_TODOS_COMPLETED':
      return state.map(({id, text}) => {
        return { completed: true, id, text };
      });
    case 'TOGGLE_ALL_TODOS_IN_PROGRESS':
      return state.map(({id, text}) => {
        return { completed: false, id, text };
      });
    case 'REMOVE_COMPLETED_TODOS':
      return state.filter((item) => {
        return !item.completed;
      });
    case 'REMOVE_TODO':
      return state.filter((item) => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

export default todos;
