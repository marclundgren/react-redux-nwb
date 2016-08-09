import React, { PropTypes } from 'react'

const ClearCompleted = ({ onClearCompleted, hasCompletedTodos }) => {
  if (!hasCompletedTodos) {
    return (<button className='clear-completed'></button>);
  }

  return (
    <button onClick={onClearCompleted} className="clear-completed">Clear Completed</button>
  );
};

ClearCompleted.propTypes = {
  onClearCompleted: PropTypes.func.isRequired
}

export default ClearCompleted
