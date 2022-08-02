import React from 'react';
import { view } from './View.scss';

export default ({ children }) => (
  <div className={view}>
    {children}
  </div>
);
