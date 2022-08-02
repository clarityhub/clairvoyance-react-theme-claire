import React from 'react';
import classnames from 'classnames';
import { menuItem } from './MenuItem.scss';

export default ({ children, className, onClick }) => (
  <button
    className={classnames(menuItem, className)}
    onClick={onClick}
  >
    {children}
  </button>
);
