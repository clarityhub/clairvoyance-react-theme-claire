import React from 'react';
import classnames from 'classnames';
import { formActions } from './FormActions.scss';

export default ({ children, className }) => (
  <div className={classnames(formActions, className)}>
    {children}
  </div>
);
