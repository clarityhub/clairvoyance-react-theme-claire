import React from 'react';
import classnames from 'classnames';
import { formGroup } from './FormGroup.scss';

export default ({ children, className }) => (
  <div className={classnames(formGroup, className)}>
    {children}
  </div>
);
