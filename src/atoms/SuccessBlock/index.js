import React from 'react';
import { branch, renderNothing } from 'recompose';
import classnames from 'classnames';
import { error } from './SuccessBlock.scss';

const SuccessBlock = ({ children, className }) => (
  <div className={classnames(error, className)} role="alert">
    {children}
  </div>
);

export default branch(
  ({ children }) => !children,
  renderNothing
)(SuccessBlock);
