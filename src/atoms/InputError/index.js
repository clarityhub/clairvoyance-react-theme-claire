import React from 'react';
import { branch, renderNothing } from 'recompose';
import classnames from 'classnames';
import { inputError } from './InputError.scss';

const InputError = ({ children, className }) => (
  <span className={classnames(inputError, className)} role="alert">
    {children}
  </span>
);

export default branch(
  ({ children }) => !children,
  renderNothing
)(InputError);
