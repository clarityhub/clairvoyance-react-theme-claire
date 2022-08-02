import React from 'react';
import classnames from 'classnames';
import { toolbar } from './Toolbar.scss';

export default ({ children, className }) => (
  <div className={classnames(toolbar, className)}>{children}</div>
);
