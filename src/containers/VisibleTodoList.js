import { connect } from 'react-redux';
import { toggleTodo, removeTodo, toggleAllCompleted, toggleAllInProgress } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onTodoDestroy: (id) => {
      dispatch(removeTodo(id))
    },
    onToggleAllCompleted: (id) => {
      dispatch(toggleAllCompleted())
    },
    onToggleAllInProgress: (id) => {
      dispatch(toggleAllInProgress())
    },

  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
