import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, onTodoClick, onTodoDestroy, onToggleAllCompleted, onToggleAllInProgress }) => {
  if (!todos.length) {
    return (<section className='main'></section>);
  }
  const allTodosCompleted = todos.every(({completed}) => { return completed });
  const onChange = allTodosCompleted ? onToggleAllInProgress : onToggleAllCompleted;
  return (
    <section className='main'>
      <input type='checkbox' checked={allTodosCompleted} onChange={onChange} className='toggle-all'/>

      <ul className='todo-list'>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onToggle={() => onTodoClick(todo.id)}
            onDestroy={() => onTodoDestroy(todo.id)}
          />
        )}
      </ul>
    </section>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDestroy: PropTypes.func.isRequired,
  onToggleAllCompleted: PropTypes.func.isRequired,
  onToggleAllInProgress: PropTypes.func.isRequired
};

export default TodoList;
