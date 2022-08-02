import React from 'react';
import classnames from 'classnames';
import { card } from './Card.scss';

export default ({ children, className }) => (
  <div className={classnames(card, className)}>
    {children}
  </div>
);
