import React from 'react';
import classnames from 'classnames';

import { filter } from './Filter.scss';

export default ({ active, children, key, onClick }) => (
  <label
    className={
      classnames(
        filter,
        {
          'active': active,
        }
      )
    }
    key={key}
  >
    {children}
    <button onClick={onClick} />
  </label>
);
