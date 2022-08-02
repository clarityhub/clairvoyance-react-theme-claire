import React from 'react';
import { loader, ball } from './Loading.scss';

export default () => (
  <div className={loader}>
    <div className={ball}>
      <div />
      <div />
      <div />
    </div>
  </div>
);
