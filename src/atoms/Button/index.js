import React from 'react';
import classnames from 'classnames';

import {
  button,
  buttonBlock,
  buttonPrimary,
  buttonOutline,
  buttonDanger,
  buttonSuccess,
  buttonIcon,
  buttonSmall,
  buttonLoading,
} from './Button.scss';

export default ({
  children,
  className,
  block,
  primary,
  outline,
  success,
  danger,
  small,
  icon,
  loading,
  ...rest
}) => (
  <button
    className={classnames(
      button,
      {
        [buttonBlock]: block,
        [buttonPrimary]: primary,
        [buttonOutline]: outline,
        [buttonIcon]: icon,
        [buttonSuccess]: success,
        [buttonDanger]: danger,
        [buttonSmall]: small,
        [buttonLoading]: loading,
      },
      className
    )}
    disabled={loading}
    {...rest}
  >
    {children}
  </button>
);
