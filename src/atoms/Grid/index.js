import React from 'react';

import { header, headerColumn, item, itemButton, itemColumn, itemColumnActions } from './Grid.scss';
import classnames from 'classnames';

export const Grid = ({ children, classname }) => (
  <div className={classnames(classname)}>
    {children}
  </div>
);

export const Header = ({ children, classname }) => (
  <div className={classnames(header, classname)}>
    {children}
  </div>
);

export const HeaderColumn = ({
  children,
  className,
  actions = false,
  width = null,
  flex = null,
}) => (
  <div
    className={classnames(headerColumn, className)}
    style={{
      flex,
      width,
    }}
  >{children}</div>
);

export const Item = ({ children, className, clickable }) => (
  <div className={classnames(item, className, { [itemButton]: clickable })}>{children}</div>
);

export const ItemColumn = ({
  children,
  className,
  actions = false,
  width = null,
  flex = null,
}) => (
  <div
    className={classnames(itemColumn, className, { [itemColumnActions]: actions })}
    style={{
      flex,
      width,
    }}
  >{children}</div>
);
