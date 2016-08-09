import React, { PropTypes } from 'react'

const Todo = ({ onToggle, onDestroy, completed, text }) => (
  <li className={completed ? 'completed' : ''}>
    <input checked={completed} type='checkbox' className='toggle' onClick={onToggle}/>

    <label>
      {text}
    </label>
    <button onClick={onDestroy} className="destroy"></button>
  </li>
)

Todo.propTypes = {
  onDestroy: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
