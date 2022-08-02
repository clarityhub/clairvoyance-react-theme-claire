import React from 'react';
import classnames from 'classnames';
import { menu } from './Menu.scss';

export default ({ children, className }) => (
  <div className={classnames(menu, className)}>{children}</div>
);
