import React from 'react';
import classnames from 'classnames';
import { view } from './FlexView.scss';

export default ({ children, className, ...props }) => (
  <div className={classnames(view, className)} {...props}>
    {children}
  </div>
);
