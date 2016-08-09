import React from 'react';
import FilterLink from '../containers/FilterLink';
import TodoCount from '../containers/TodoCount';
import ClearCompleted from '../containers/ClearCompleted';

const Footer = ({onClearCompleted, hasTodos}) => {
  if (!hasTodos) {
    return (<div></div>);
  }
  return (
    <footer className="footer">
      <TodoCount />
      <ul className="filters">
        <li>
          <FilterLink filter="SHOW_ALL">
            All
          </FilterLink>
        </li>
        <li>
          <FilterLink filter="SHOW_ACTIVE">
            Active
          </FilterLink>
        </li>
        <li>
          <FilterLink filter="SHOW_COMPLETED">
            Completed
          </FilterLink>
        </li>
      </ul>
      <ClearCompleted />
    </footer>
  )
};
export default Footer;
