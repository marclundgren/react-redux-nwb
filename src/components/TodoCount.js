import React, { PropTypes } from 'react'

const TodoCount = ({ count }) => (
  <span className="todo-count">
    {count} item{count !== 1 ? 's' : ''} left
  </span>
)

TodoCount.propTypes = {
  count: PropTypes.number.isRequired
}

export default TodoCount
